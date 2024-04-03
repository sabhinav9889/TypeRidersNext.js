"use client"
import { useState,useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faClock, faBarsProgress, faKeyboard, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "./context";

const HomePage = ()=>{
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart} = useContext(messageData);
    const [selectTheme, setSelectedTheme] = useState(false);
    const headr = useRef(null);
    const currDiv = headr.current;
    let MyTheme = "bg-zinc-800";
        if(theme===0){ 
            MyTheme = "bg-zinc-800";
         }
        else if(theme===1){
            MyTheme = "bg-gray-800";
         }
        else if(theme===2){ 
            MyTheme = "bg-orange-800";
         }
        else if(theme===3){ 
            MyTheme = "bg-slate-800";
        }
        else if(theme===4){ 
            MyTheme = "bg-gray-500";
        }
        else if(theme===5){ 
            MyTheme = "bg-pink-800";
         }
    return(
        <div className="w-full absolute select-none hidden lg:block font-mono">   
        {(begin)?<div className="p-3 flex"><FontAwesomeIcon icon={faKeyboard} size="xl" /><p className="pl-4">TypeRiders</p></div>:<></>}
            {(!begin)?
            <div className={`grid grid-cols-12 pr-12 ${MyTheme} text-orange-300 cursor-pointer`}>
                <div className="p-3 xl:flex xl:col-span-2 hidden text-white" onClick={()=>setStart(false)}><div><FontAwesomeIcon icon={faKeyboard} size="xl" /></div><p className="pl-4">TypeRiders</p></div>
                <div className="flex xl:col-span-4 col-span-6">
                    <p className="p-3 text-lg text-amber-300"><FontAwesomeIcon icon={faBarsProgress} /></p>
                    {(diff===0)?<p className="pt-3 p-2 text-lg text-white">Simple</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setDiff(0)}>Simple</p>}
                    {(diff===1)?<p className="pt-3 p-2 text-lg text-white">Punctuation</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setDiff(1)}>Punctuation</p>}
                    {(diff===2)?<p className="pt-3 p-2 text-lg text-white">Numbers</p>:<p className="pt-3 p-2  text-lg text-orange-200" onClick={()=>setDiff(2)}>Numbers</p>}
                    {(diff===3)?<p className="pt-3 p-2 text-lg text-white">Coding</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setDiff(3)}>Coding</p>}
                </div>
                <div className="flex col-span-3">
                    <p className="p-3 text-lg text-amber-300"><FontAwesomeIcon icon={faClock} /></p>
                    {(countDown===15)?<p className="pt-3 p-2 text-lg text-white">15</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setCountDown(15)}>15</p>}
                    {(countDown===30)?<p className="pt-3 p-2 text-lg text-white">30</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setCountDown(30)}>30</p>}
                    {(countDown===60)?<p className="pt-3 p-2 text-lg text-white">60</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setCountDown(60)}>60</p>}
                    {(countDown===100)?<p className="pt-3 p-2 text-lg text-white">100</p>:<p className="pt-3 p-2 text-lg text-orange-200" onClick={()=>setCountDown(100)}>100</p>}
                </div>
              {(diff===4)?<div className="mt-3 ml-9 text-white flex col-span-2"><FontAwesomeIcon icon={faAddressCard} size="xl" /><p className="ml-2">Profile</p></div>:<div className="mt-3 ml-9 text-orange-300 flex" onClick={()=>setDiff(4)}><FontAwesomeIcon icon={faAddressCard} size="xl" /><p className="ml-2">Profile</p></div>}
              <div className="col-span-1 absolute z-10 right-4">
                  <div className="p-2" onClick={()=>setSelectedTheme((selectTheme)?false:true)}>
                     <FontAwesomeIcon icon={faPalette} className="text-white mt-2.5 ml-1" size="lg"/>
                  </div>
                  {(selectTheme)&&<div className="border bg-white rounded-3xl h-56">
                    <div className={`ml-2 mt-3 w-6 h-6 bg-black rounded-full ${theme===0?'border-black border':'border-none' }`} onClick={()=>{setTheme(0); setSelectedTheme(false);}}></div>
                    <div className={`ml-2 mt-3 w-6 h-6 bg-gray-900 rounded-full ${theme===1?'border-black border':'border-none' }`} onClick={()=>{setTheme(1); setSelectedTheme(false);}}></div>
                    <div className={`ml-2 mt-3 w-6 h-6 bg-orange-900 rounded-full ${theme===2?'border-black border':'border-none' }`} onClick={()=>{setTheme(2); setSelectedTheme(false);}}></div>
                    <div className={`ml-2 mt-3 w-6 h-6 bg-slate-900 rounded-full ${theme===3?'border-black border':'border-none' }`} onClick={()=>{setTheme(3); setSelectedTheme(false);}}></div>
                    <div className={`ml-2 mt-3 w-6 h-6 bg-pink-200 rounded-full ${theme===4?'border-black border':'border-none' }`} onClick={()=>{setTheme(4); setSelectedTheme(false);}}></div>
                    <div className={`ml-2 mt-3 w-6 h-6 bg-pink-900 rounded-full ${theme===5?'border-black border':'border-none' }`} onClick={()=>{setTheme(5); setSelectedTheme(false);}}></div>
                  </div>}
              </div>
            </div>:<></>}
        </div>
    )
}

export default HomePage;