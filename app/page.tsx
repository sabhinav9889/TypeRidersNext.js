"use client"
import SinglePlayer from "./home/soloPlay";
import UpNav from "./home/upperNav";
import { useContext, useRef, useState} from "react";
import {messageData} from "./context";
import Head from "next/head";
import DownNav from "./home/downNav";
import Slider from './home/slider';
import Garage from './home/garage';
import { bgList, textList } from "./constant";
export default function Home() {
  const themeSet = useRef<HTMLDivElement>(null);
  const contextValue = useContext(messageData);
  const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart,music, cur, setCur, drawer, setDrawer, profile, gar, blur ,setBlur} = contextValue!;
  const handleContextMenu = (event: Event) => {
    event.preventDefault();
  };
  if(themeSet.current){
    themeSet.current.addEventListener('mousemove',()=>{setCur(true);});
    themeSet.current.addEventListener('contextmenu', handleContextMenu);
    for(let i=0; i<bgList.length; i++){
      if(theme===i) themeSet.current.classList.add(bgList[i]);
      else themeSet.current.classList.remove(bgList[i]);
      if(theme===4){ if(i===4) themeSet.current.classList.add(textList[1]); else  themeSet.current.classList.remove(textList[0]); }
      else{ if(i===theme) themeSet.current.classList.add(textList[0]); else themeSet.current.classList.remove(textList[1]); }
    }
  }
  return (
      <main className={`${(!start)?'bg-covers bg-center':' bg-orange-900 '} text-gray-100 min-h-screen`} ref={themeSet} style={{backgroundImage: `${(!start)?'url("/2bde7d14133968f97d6c4dd898edb989.gif")':'none'}`}}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {(! start)&&
        <div className="w-full flex justify-center select-none ">
          <div className="mt-40">
           <p className="text-4xl h-20 text-orange-800 font-bold font-mono">TypeRiders</p>
           <button className="border hover:border-orange-800 mt-36 w-44 h-10 rounded-md hover:bg-orange-800" onClick={()=>setStart(true)}>Start</button>
          </div>
        </div>}
        {(start)&&<div className={`${(cur)?'':'cursor-none'} select-none`}>
        {(!profile)&&<UpNav/>}
          {<SinglePlayer/>}
          {(!music)&&<Slider/>}
          {(gar)&&<Garage/>}
        {(!begin&&!profile&&!gar)&&<DownNav/>}
        </div>}
      </main>
  );
}