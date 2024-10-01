"use client";
import React, { useEffect, useRef, useState, ReactNode, useContext, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRotateRight, faLock} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../context";
import Car from "./car";
import MusicPlayer from "./spotify";
import Graph from './graph';
import Profile from "./profile";
import { keyboardButtons , initialStates} from "../constant";
import { generateWords, reducer, keySound } from "../utils";

const SinglePlayer = () => {
  const contextValue = useContext(messageData);
  const { countDown, diff,  begin, setBegin,  durpar,  setCur, livewpm, profile, setDrawer, sound, blur ,setBlur, gar} = contextValue!;
  initialStates.words = generateWords(diff, durpar, countDown);
  initialStates.seconds = countDown;
  const [state, dispatch] = useReducer(reducer, initialStates);
  // dispatch({type:"setSeconds",payload:countDown});
  const {caps, words, cursor, change, time, countKey, score, correct, seconds, wrongScore, lastIdx, wpm, spin} = state;
  const text = useRef(null);
  const mainDiv = useRef(null);
  const [passage, setPassage] = useState<React.ReactNode[] | null>([]);
  const blink = useRef(null);
  const blurP = useRef(null);
  const [wrongSet, setWrongSet] = useState<Set<number>>(new Set<number>());
  const [isWrong, setIsWrong] = useState<Set<number>>(new Set<number>());
  const [wpmList, setWpmList] = useState<number[]>([]);
  const [graph, setGraph] = useState<number[]>([]);
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  const handleRefresh = ()=>{
    setWpmList([]);
    setIsWrong((st)=>{ st.clear(); return st; });
    setGraph([]);
    setWrongSet((set)=>{set.clear(); return set;});
    setBlur(true);
    dispatch({type:"default", payload:initialStates});
    if(text.current){ 
      const element =  text.current as HTMLInputElement;
       element.style.marginTop = '0px';
    }
    else dispatch({type:"setScore", payload:-1});
    if(text.current){ 
      const element = text.current as HTMLInputElement;
      element.style.marginTop = '0px'; 
    }
    dispatch({type:"setTime", payload:false});
    setBegin(false);
    setCur(true);
    if(text.current){ 
      const element = text.current as HTMLInputElement;
      element.style.filter='blur(5px)';
    }
  }
  useEffect(()=>{
    handleRefresh();
  },[diff]);
  useEffect(() => {
    if(time){
      const interval = setInterval(() => {
        if (seconds > 0) {
          dispatch({type:"setSeconds",payload:seconds-1});
        }
      }, 1000);
      dispatch({type:"setWpm",payload:(correct/(countDown-seconds)*60)});
      if(wpm){ 
        setGraph((prev)=>[...prev, countDown-seconds]);
        setWpmList((prev)=>[...prev, wpm.toFixed(2)]);
      }
      if(seconds===0){
        const accuracy = ((countKey-wrongScore)/countKey)*100;
        if(text.current){ 
          const element = text.current as HTMLInputElement;
          element.style.marginTop = '128px';
        }
        if(accuracy) dispatch({type:"setScore",payload:accuracy});
      }
      // Clear interval when component unmounts
      return () => clearInterval(interval); 
    }
    else dispatch({type:"setSeconds",payload:countDown}); 
  }, [seconds,time,countDown, words]);
  // return set of wrong words
  useEffect(() => {
    let cnt = 0, sz = 0, r = 0;
    const ans = words.split("").map((el:any, idx:any) =>
        <span key={r++} className="" >{el}</span>
    )
    if(ans){
      const clone = React.cloneElement(ans[cursor], {className: 'text-white'});
      ans[cursor] = <span className="visible text-orange-400 animate-pulse" ref={blink} key={cursor}>|{clone}</span>;
    }
    setPassage(ans);
  }, [begin]);
  useEffect(() => {
    if(mainDiv.current&&!blur){  
      const element = mainDiv.current as HTMLInputElement;
      element.focus();
    }
  }, [blur]);
  const handleKeyDown = (event: any) => {
    if(score!==-1) return;
    if(sound) keySound(event);
    if(!isMobile()) dispatch({type:"setCaps",payload:event.getModifierState('CapsLock')});
    let eventKey = event.key;
    if(eventKey==='Unidentified'||eventKey===undefined){
      eventKey = event.target.value;
    }
    if(eventKey==="Backspace"){
      let num = cursor-1;
      if(isMobile()) return;
      if(num<0) return;
      if((num)<lastIdx) return;
      if(blink.current===null) return;
      const BlinkCurr = blink.current as HTMLElement;
      if(BlinkCurr){
        let curHgt = BlinkCurr.getBoundingClientRect();
        if(curHgt.top<128){ 
          num++; num++;
          dispatch({type:"setCursor",payload:num});
          dispatch({type:"setChange",payload:change+1});
          return; 
        }
      }
      if(wrongSet.has(num)){
        setWrongSet((set)=>{ set.delete(num); return set;});
      }
      if(isWrong.has(num)){
        setIsWrong((st)=>{ st.delete(num); return st;})
      }
      if(passage&&cursor>=0){
        const temp: ReactNode = passage;
        setPassage(prevPassage => {
          const updatedPassage = [...(prevPassage)||[]]; // Clone the passage array
          updatedPassage[cursor] = <span className="" key={cursor}>{words[cursor]}</span>;
          return updatedPassage;
        });
        setPassage(prevPassage => {
          const updatedPassage = [...(prevPassage)||[]]; // Clone the passage array
          const clone = React.cloneElement(passage[num] as React.ReactElement, {className: 'text-white'});
          updatedPassage[num] = <span className="visible text-orange-400 animate-pulse" ref={blink} key={num}>|{clone}</span>;
          return updatedPassage;
        });
      }
      dispatch({type:"setCursor",payload:cursor-1});
      dispatch({type:"setChange",payload:change+1});
      return;
    }
    if(cursor===words.length) return;
    if(!keyboardButtons.includes(eventKey))  return;
    setBegin(true);
    setCur(false);
    if(blur){
      setBlur(false);
      if(text.current){  
        const element = text.current as HTMLInputElement;
        element.style.filter='none'; 
      }
      return;
    }
    if(time===false) dispatch({type:"setTime", payload:true});
    if (blink.current) {
      const element = blink.current as HTMLInputElement;
      const loc = element.getBoundingClientRect();
      if(text.current){
        const myCurr = text.current as HTMLInputElement;
        const curr = myCurr.style.marginTop;
        let str = "";
        for (let i = 0; i < curr.length - 2; i++) {
          str += curr[i]; 
        }
        let num = parseInt(str, 10);
        if (isNaN(num)) num = 32;
        if (loc.top >= 172 && text.current){
          const ele = text.current as HTMLInputElement;
          ele.style.marginTop = `${num - 32}px`;
          let index = cursor;
          dispatch({type:"setLastIdx",payload:index});
        }
      }
    }
    if(passage){
      if(cursor>=0) passage[cursor] = <span className="" key={cursor}>{words[cursor]}</span>;
      if(cursor+1<words.length){
        const clone = React.cloneElement(passage[cursor+1] as React.ReactElement, {className: 'text-white'});
        passage[cursor+1] = <span className="visible text-orange-400 animate-pulse" key={cursor+1} ref={blink}>|{clone}</span>;
      }
    }
    if(eventKey!==words[cursor]){
      if(sound){const audio = new Audio("/error-8-206492.mp3");
      audio.play();
      }
      setWrongSet((set)=>set?.add(cursor));
      setIsWrong((st)=>{ st?.add(cursor); return st;});
      if(passage){
        const clone = React.cloneElement(passage[cursor] as React.ReactElement, {className: 'text-red-600'});
        passage[cursor] = clone;
      }
      dispatch({type:"setWrongScore",payload:wrongScore+1});
      dispatch({type:"setSpin",payload:true});
    }
    else{
      if(passage){
        const clone = React.cloneElement(passage[cursor] as React.ReactElement, {className: 'text-orange-300'});
        passage[cursor] = clone;
      }
      dispatch({type:"setSpin",payload:false});
    }
    if(eventKey===' '&&eventKey===words[cursor]){
      if(isWrong.size===0){ 
        dispatch({type:"setCorrect",payload:correct+1});
        dispatch({type:"setLastIdx",payload:cursor});
      }
      setIsWrong((st)=>{st.clear(); return st;});
    }
    dispatch({type:"setCountKey",payload:countKey+1});
    dispatch({type:"setCursor",payload:cursor+1});
    if(cursor===words.length){
      dispatch({type:"setCursor",payload:0});
      dispatch({type:"setLastIdx",payload:0});
      setWrongSet((st)=>{st.clear(); return st; });
      if(text.current){ 
        const ele = text.current as HTMLInputElement;
        ele.style.marginTop = '128px';
      }
    }
    dispatch({type:"setChange",payload:change+1});
  };
  
  return (
    <>
     <div className={`${(gar)?'hidden':'block'} w-full min-h-screen select-none absolute`} ref={mainDiv} tabIndex={0} role="main" onKeyDown={(e)=>handleKeyDown(e)} onClick={()=>setDrawer(false)}>
      <div className={`${(profile||gar)?'hidden':'block'} flex justify-center items-center`}>
        {(score===-1)&&
        <div className="sm:p-32 p-12 h-auto">
          <div className="text-orange-400 mb-4 sm:mt-0 mt-12 flex font-semibold justify-center md:justify-normal">
            <span className="absloute z-20 w-1/4 sm:w-1/5 flex justify-end ">{seconds} sec</span>
            <span className="sm:flex  w-full justify-end hidden">
            {(caps)&&
              <span className="flex absloute z-10 shadow-lg text-yellow-200">
                <FontAwesomeIcon icon={faLock} className="mr-2"/>
                Caps Lock
              </span>
              }
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div className="overflow-hidden text-2xl sm:h-24 h-32 sm:w-3/4 w-64" onClick={()=>{if(cursor===0&&blur) dispatch({type:"setWords",payload:generateWords(diff, durpar, countDown)}); setBlur(false); setBegin(true);  setCur(false); if(text.current){ const ele = text.current as HTMLInputElement; ele.style.filter='none';}} }>
              <div className="flex justify-center">{(blur)?<p className="absolute z-10 mt-8 font-mono  text-sm" ref={blurP}>Click here or press any key to focus</p>:<div className="hidden">Hello</div>}</div>
                <div className={`overflow-hidden font-mono ${(blur)?'blur-sm':''}`} ref={text} onClick={()=>{ setBlur(false); setCur(false); setBegin(true); if(text.current){ const ele = text.current as HTMLInputElement; ele.style.filter='none';} dispatch({type:"setChange",payload:change+1});}} >
                {passage}
                </div>
              <input type="text"  className="absolute w-64 h-32 sm:hidden top-20 opacity-0" onClick={()=>{ setBlur(false); setCur(false); setBegin(true);}} onChange={(e)=>{  handleKeyDown(e);   e.target.value=""}}/> 
            </div>
          </div>
          <div className="flex justify-center text-black">
            <button
              className="p-1 mt-8 text-orange-400 select-none"
              onClick={() => handleRefresh()}
            >
              <FontAwesomeIcon icon={faRotateRight} size="xl"/>
            </button>
          </div>
        </div>}
        {(score!==-1)?
          <div className="">
            <div className="flex justify-center sm:mt-44 lg:mt-4 mt-10 w-full">
              <div className="flex text-orange-300 mb-4 sm:text-2xl"><p className="p-4 justify-center">Accuracy - {score.toFixed(2)} %</p><p className="p-4 flex justify-center">WPM - {wpm.toFixed(2)}</p></div>
              <div className="flex justify-center text-black"></div>
            </div>
            <div className="w-full flex justify-center sm:mt-0 mt-12">
              <Graph wpmList={wpmList} graph={graph}/>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="p-1 text-orange-400 select-none absolute top-80 sm:mt-40 z-50"
                onClick={() => handleRefresh()} 
              >
                <FontAwesomeIcon icon={faRotateRight} size="xl"/>
              </button>
            </div>
           </div>:<></>
        } 
      </div>
      {(livewpm&&!profile)&&<Car per={wpm.toFixed(2)} spin={spin} begin={begin}/>}
      {(profile)&&<Profile/>}
    </div>
        <MusicPlayer/>
    </>
  );
};

export default SinglePlayer;