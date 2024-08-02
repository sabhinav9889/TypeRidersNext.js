"use client";
import React, { useEffect, useRef, useState, ReactNode, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "./context";
import Car from "./car";
import MusicPlayer from "./musicPlayer";
import Graph from './graph';
import Profile from "../profile/page";
import { generate, count } from "random-words";
import { useRouter } from 'next/navigation';

const SinglePlayer = () => {
  const punct = "The sun, a fiery orb in the sky; blazed relentlessly—its rays, scorching everything in their path, made the earth beneath shimmer with heat waves. Mirages appearing like tantalizing illusions; teasing the weary traveler's senses. Birds, seeking refuge from the intense heat, sought shelter amidst the dense foliage. Their chirps—a symphony of survival—echoing through the sweltering air. Clouds, wispy and ethereal, drifted lazily across the azure expanse; casting fleeting shadows upon the parched land below! The wind, a gentle caress at first, gradually escalated into a fierce gale—whipping through the landscape with wild abandon, stirring up dust devils in its wake: trees, their branches swaying in a frantic dance, creaked and groaned under the relentless assault. Animals, instinctively attuned to the rhythms of nature, hunkered down in their burrows;";
  const numPara = "In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see. In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see.";
  const coding = `if (userSelection.equals("attack")) { enemyHealth -= weapon.getDamage(); for (int i = 0; i < enemyAttacks.length; i++) { if (Math.random() < enemyAttacks[i].getAccuracy()) { playerHealth -= enemyAttacks[i].getDamage(); System.out.println("Enemy " + enemyAttacks[i].getName() + " hits you for " + enemyAttacks[i].getDamage() + " damage!"); } else { System.out.println("Enemy " + enemyAttacks[i].getName() + " misses!"); } } } else if (userSelection.equals("heal")) { if (playerHealth + potion.getHealAmount() <= playerMaxHealth) { playerHealth += potion.getHealAmount(); } else { playerHealth = playerMaxHealth; } System.out.println("You heal for " + potion.getHealAmount() + " health points!"); } else { System.out.println("Invalid selection. Please choose 'attack' or 'heal'."); } while (playerHealth > 0 && enemyHealth > 0) { // Continue the combat loop... }`;
  const simple = "orange pen queen rat sun table, umbrella van watch xylophone yo-yo zoo ant bear cup desk elephant frog grape house ice jar kite lemon map nail owl pear quill rabbit snake tree unicorn violin window yarn zipper. In a quaint little village nestled amidst rolling hills and lush greenery, there lived a curious young boy named Timothy, whose days were filled with wonder and adventure. From the moment he opened his eyes in the morning to the time he drifted off to sleep at night, Timothy's imagination soared to new heights, fueled by the endless possibilities that surrounded him.";
  const contextValue = useContext(messageData);
  const { countDown, diff,  begin, setBegin, music, durpar} = contextValue!;
  const generateWords = () => {
    function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function shuffleArray(array: string[]): string {
      let str: string = "";
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      for (let i = array.length - 1; i > 0; i--) {
        str += array[i];
        str += " ";
    }
      return str;
    }
    let wordTemp  = Object.values(generate(500));
    function addIntoList(obj:Object){
      wordTemp.push(...Object.values(obj));
    }
    if(durpar===1){
      if(diff===0){
        addIntoList(generate(400));
      }
       if(diff===1){ 
        addIntoList(generate({ exactly: 67, wordsPerString: 2, separator: ", " }));
        addIntoList(generate({ exactly: 67, wordsPerString: 2, separator: ". " }));
        addIntoList(generate({ exactly: 67, wordsPerString: 2, separator: "! " }));
        addIntoList(generate({ exactly: 63, wordsPerString: 2, separator: " : " }));
        addIntoList(generate({ exactly: 63, wordsPerString: 2, separator: ` "` }));
        addIntoList(generate({ exactly: 63, wordsPerString: 2, separator: ` ? ` }));
       }
       if(diff===2){
        addIntoList(generate(200));
        for(let i=0; i<50; i++)
        wordTemp.push(`${getRandomInt(1, 10)}`);
        for(let i=0; i<100; i++)
        wordTemp.push(`${getRandomInt(10,100)}`);
        for(let i=0; i<50; i++)
        wordTemp.push(`${getRandomInt(100, 1000)}`);
      }
       else if(diff===3){
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: " { " }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` } ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` + ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` * ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` ( ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` ) ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` = ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` ; ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` @ ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` % ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` > ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` < ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` ] ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` [ ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` - ` }));
        addIntoList(generate({ exactly: 5, wordsPerString: 2, separator: ` & ` }));
       }
    }
    const shuffledArray:string = shuffleArray(wordTemp.slice());
    return shuffledArray;
 }
  const [words,setWords] = useState(generateWords());
  // if(diff===0) words = simple;
  // else if(diff==1) words =punct;
  // else if(diff==2) words =numPara;
  // else words = coding;
  let wordComp = words;
  const text = useRef(null);
  const mainDiv = useRef(null);
  const [passage, setPassage] = useState<React.ReactNode[] | null>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [change, setchange] = useState(0);
  const [time, setTime] = useState(false);
  const blink = useRef(null);
  const blurP = useRef(null);
  const [wrongSet, setWrongSet] = useState<Set<number>>(new Set<number>());
  const [countKey, setCountKey] = useState(0);
  const [score, setScore] = useState(-1);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(countDown);
  const [wrongScore, setWrongScore] = useState(0);
  const [isWrong, setIsWrong] = useState<Set<number>>(new Set<number>());
  const [lastIdx, setLastIdx] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [blur, setBlur] = useState(1);
  const [spin, setSpin] = useState(false);
  const [wpmList, setWpmList] = useState<number[]>([]);
  const [graph, setGraph] = useState<number[]>([]);
  // const [mob, setMobKey] = useState("");
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  const handleRefresh = ()=>{
    setCountKey(0);
    setScore(-1);
    setCorrect(0);
    setSeconds(countDown);
    setWpmList([]);
    setWrongScore(0);
    setIsWrong((st)=>{ st.clear(); return st; });
    setGraph([]);
    setLastIdx(0);
    setWpm(0);
    setBlur(1);
    setchange(0);
    setCursor(0);
    setSpin(false);
    setWrongSet((set)=>{set.clear(); return set;});
    setWords(generateWords());
    if(text.current){ 
      const element =  text.current as HTMLInputElement;
       element.style.marginTop = '0px';
    }
    else setScore(-1); 
    if(text.current){ 
      const element = text.current as HTMLInputElement;
      element.style.marginTop = '0px'; 
    }
    setTime(false);
    setBegin(false);
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
          setSeconds(seconds - 1);
        }
      }, 1000);
      setWpm((correct/(countDown-seconds)*60));
      if(!isNaN(wpm)&&wpm){ 
        setGraph((prev)=>[...prev, countDown-seconds]);
        setWpmList((prev)=>[...prev, wpm]);
      }
      if(seconds===0){
        const accuracy = ((countKey-wrongScore)/countKey)*100;
        const getIdx = cursor;
        if(text.current){ 
          const element = text.current as HTMLInputElement;
          element.style.marginTop = '128px';
        }
        if(accuracy) setScore(accuracy);
      }
      // Clear interval when component unmounts
      return () => clearInterval(interval); 
    }
    else setSeconds(countDown);
  }, [seconds,time,countDown, words]);  
  // return set of wrong words
  useEffect(() => {
    let cnt = 0, sz = 0, r = 0;
    const ans = words.split("").map((el, idx) =>
        <span key={r++} className="" >{el}</span>
    )
    if(ans){
      const clone = React.cloneElement(ans[cursor], {className: 'text-white'});
      ans[cursor] = <span className="visible text-orange-400 animate-pulse" ref={blink} key={cursor}>|{clone}</span>;
    }
    setPassage(ans);
  }, [begin]);
  useEffect(() => {
    if(mainDiv.current&&blur===0){  
      const element = mainDiv.current as HTMLInputElement;
      element.focus();
    }
  }, [blur]);
  const handleKeyDown = (event: any) => {
    if(score!==-1) return;
    const lis: string[] = [
      "AltGraph", "Alt", "Control", "Enter", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "CapsLock", "Tab", "Escape", "Backspace", "Shift","Meta",
      "end", "F1", "F2", "F3", "F4", "F5","F6", "F7", "F8", "F9","F10", "F11", "F12", "F13", "AudioVolumeUp", "AudioVolumeDown","MediaPlay","MediaPlayPause","MediaTrackPrevious","MediaTrackNext"
    ];
    const lis2: string[] = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
      "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=","`","~","|",',', ".", "?", "'", "/", "-", ":", ";", '"',
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "{","}","[","]","<",">", "_"," "
    ]
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
          setCursor(num);
          setchange((prev)=>prev+1);
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
        // temp[cursor] = <span className="" key={cursor}>{wordComp[cursor]}</span>;
        setPassage(prevPassage => {
          const updatedPassage = [...(prevPassage)||[]]; // Clone the passage array
          updatedPassage[cursor] = <span className="" key={cursor}>{wordComp[cursor]}</span>;
          return updatedPassage;
        });
        setPassage(prevPassage => {
          const updatedPassage = [...(prevPassage)||[]]; // Clone the passage array
          const clone = React.cloneElement(passage[num] as React.ReactElement, {className: 'text-white'});
          updatedPassage[num] = <span className="visible text-orange-400 animate-pulse" ref={blink} key={num}>|{clone}</span>;
          return updatedPassage;
        });
      }
      setCursor(cursor-1);
      setchange(change+1);
      return;
    }
    if(cursor===wordComp.length) return;
    if(!lis2.includes(eventKey))  return;
    if(blur===1){
      setBlur(0);
      if(text.current){  
        const element = text.current as HTMLInputElement;
        element.style.filter='none'; 
      }
      return;
    }
    if(time===false) setTime(true);
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
          setLastIdx(index);
        }
      }
    }
    // if(passage) console.log("Key : " + event.key+"word: "+ typeof(passage));
    if(passage){
      if(cursor>=0) passage[cursor] = <span className="" key={cursor}>{wordComp[cursor]}</span>;
      if(cursor+1<wordComp.length){
        const clone = React.cloneElement(passage[cursor+1] as React.ReactElement, {className: 'text-white'});
        // const clone = React.cloneElement(passage[cursor+1], {className: 'text-white'});
        passage[cursor+1] = <span className="visible text-orange-400 animate-pulse" key={cursor+1} ref={blink}>|{clone}</span>;
      }
    }
    if(eventKey!==wordComp[cursor]){
      setWrongSet((set)=>set?.add(cursor));
      setIsWrong((st)=>{ st?.add(cursor); return st;});
      // const clone = React.cloneElement(passage[cursor], {className: 'text-red-600'});
      if(passage){
        const clone = React.cloneElement(passage[cursor] as React.ReactElement, {className: 'text-red-600'});
        passage[cursor] = clone;
      }
      setWrongScore(wrongScore+1);
      setSpin(true);
    }
    else{
      // const clone = React.cloneElement(passage[cursor], {className: 'text-orange-300'});
      if(passage){
        const clone = React.cloneElement(passage[cursor] as React.ReactElement, {className: 'text-orange-300'});
        passage[cursor] = clone;
      }
      setSpin(false);
    }
    if(eventKey===' '&&eventKey===wordComp[cursor]){
      if(isWrong.size===0){ 
        setCorrect(correct+1);   
        setLastIdx(cursor);
      }
      setIsWrong((st)=>{st.clear(); return st;});
    }
    setCountKey(countKey+1);
    setCursor(cursor+1);
    if(cursor===words.length){
      setCursor(0);
      setLastIdx(0);
      setWrongSet((st)=>{st.clear(); return st; });
      if(text.current){ 
        const ele = text.current as HTMLInputElement;
        ele.style.marginTop = '128px';
      }
    }
    setchange(change+1);
  };
  
  return (
    <div className={`w-full min-h-screen select-none`} ref={mainDiv} tabIndex={0} onKeyDown={(e)=>handleKeyDown(e)}>
      <div className={`${diff===4?'hidden':'flex'} justify-center items-center`}>
        {(score===-1)&&
        <div className="sm:p-32 p-12 h-auto">
          <div className="text-orange-400 flex justify-center mb-4 font-semibold">{seconds} sec</div>
          <div className="flex justify-center items-center">
            <div className="overflow-hidden text-2xl sm:h-24 h-32 sm:w-3/4 w-64">
              <div className="flex justify-center" onClick={()=>{ setBlur(0); setBegin(true); if(text.current){ const ele = text.current as HTMLInputElement; ele.style.filter='none';}} }>{(blur)?<p className="absolute z-10 mt-8 font-mono  text-sm" ref={blurP}>Click here or press any key to focus</p>:<div className="hidden">Hello</div>}</div>
                <div className={`overflow-hidden font-mono ${(blur)?'blur-sm':''}`} ref={text} onClick={()=>{ setBlur(0); setBegin(true); if(text.current){ const ele = text.current as HTMLInputElement; ele.style.filter='none';} setchange((prev)=>prev+1)}} >
                {passage}
                </div>
              <input type="text"  className="absolute w-64 h-32 sm:hidden top-20 opacity-0" onClick={()=>{setBlur(0); setBegin(true);}} onChange={(e)=>{  handleKeyDown(e);   e.target.value=""}}/> 
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
            <div className="flex justify-center sm:mt-44 xl:mt-4 lg:mt-80 mt-10 w-full">
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
      <Car per={wpm.toFixed(2)} spin={spin}/>
      <div className={`w-80 h-40 overflow-hidden absolute right-0 top-80 mt-40 sm:mt-0 ${(begin)?' -z-10':''}`}>
      {(music)&&<MusicPlayer/>} 
      </div>
      {(diff==4)&&<Profile/>}
    </div>
  );
};

export default SinglePlayer;