"use client"
import SinglePlayer from "./home/soloPlay";
import UpNav from "./home/upperNav";
import { useContext, useRef, useState} from "react";
import {messageData} from "./context";
import Head from "next/head";
import DownNav from "./home/downNav";

export default function Home() {
  const themeSet = useRef<HTMLDivElement>(null);
  const contextValue = useContext(messageData);
  const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, cur, setCur} = contextValue!;
  const handleContextMenu = (event: Event) => {
    event.preventDefault();
  };
  if(themeSet.current){
    themeSet.current.addEventListener('mousemove',()=>setCur(true));
    themeSet.current.addEventListener('contextmenu', handleContextMenu);
    if(theme===0){ themeSet.current.classList.remove("bg-gray-900"); themeSet.current.classList.remove("bg-orange-900"); themeSet.current.classList.remove("bg-slate-900"); themeSet.current.classList.remove("bg-pink-200"); themeSet.current.classList.remove("bg-pink-900"); themeSet.current.classList.add("bg-neutral-950"); themeSet.current.classList.remove("text-black"); themeSet.current.classList.add("text-gray-100"); }
    else if(theme===1){ themeSet.current.classList.remove("bg-neutral-950"); themeSet.current.classList.remove("bg-orange-900"); themeSet.current.classList.remove("bg-slate-900"); themeSet.current.classList.remove("bg-pink-900"); themeSet.current.classList.remove("bg-pink-200"); themeSet.current.classList.add("bg-gray-900"); themeSet.current.classList.remove("text-black"); themeSet.current.classList.add("text-gray-100");}
    else if(theme===2){ themeSet.current.classList.remove("bg-gray-900"); themeSet.current.classList.remove("bg-neutral-950"); themeSet.current.classList.remove("bg-pink-900"); themeSet.current.classList.remove("bg-slate-900"); themeSet.current.classList.remove("bg-pink-200"); themeSet.current.classList.add("bg-orange-900"); themeSet.current.classList.remove("text-black"); themeSet.current.classList.add("text-gray-100"); }
    else if(theme===3){ themeSet.current.classList.remove("bg-gray-900"); themeSet.current.classList.remove("bg-pink-900"); themeSet.current.classList.remove("bg-orange-900"); themeSet.current.classList.remove("bg-neutral-950"); themeSet.current.classList.remove("bg-pink-200"); themeSet.current.classList.add("bg-slate-900");  themeSet.current.classList.remove("text-black"); themeSet.current.classList.add("text-gray-100");}
    else if(theme===4){ themeSet.current.classList.remove("bg-gray-900"); themeSet.current.classList.remove("bg-pink-900"); themeSet.current.classList.remove("bg-orange-900"); themeSet.current.classList.remove("bg-slate-900"); themeSet.current.classList.remove("bg-neutral-950"); themeSet.current.classList.add("bg-pink-200"); themeSet.current.classList.remove("text-gray-100"); themeSet.current.classList.add("text-black"); }
    else if(theme===5){ themeSet.current.classList.remove("bg-gray-900"); themeSet.current.classList.remove("bg-orange-900"); themeSet.current.classList.remove("bg-slate-900"); themeSet.current.classList.remove("bg-neutral-950"); themeSet.current.classList.remove("bg-pink-200"); themeSet.current.classList.add("bg-pink-900"); themeSet.current.classList.remove("text-black"); themeSet.current.classList.add("text-gray-100"); }
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
        {(!begin)&&<UpNav/>}
        <SinglePlayer/>
        {(!begin)&&<DownNav/>}
        </div>}
      </main>
  );
}