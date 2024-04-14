"use client"
import { useState,useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faClock, faBarsProgress, faKeyboard, faAddressCard, faMusic, faParagraph} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "./context";

const HomePage = () => {
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic, durpar, setDurPar} = contextValue!;
    const [selectTheme, setSelectedTheme] = useState(false);
    // const headr = useRef(null);
    // const currDiv = headr.current;
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
        <div className="w-full absolute select-none font-mono">
        {(begin)?<div className="p-3 flex"><FontAwesomeIcon icon={faKeyboard} size="xl" /><p className="pl-4">TypeRiders</p></div>:<></>}
            {(!begin)?
            <div className={`grid md:grid-cols-12 grid-cols-4 pr-12 ${MyTheme} text-orange-300 cursor-pointer`}>
                <div className="p-3 xl:flex xl:col-span-2 hidden text-white" onClick={()=>setStart(false)}><div><FontAwesomeIcon icon={faKeyboard} size="xl" /></div><p className="pl-4">TypeRiders</p></div>
                <div className="flex xl:col-span-4 col-span-6 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faBarsProgress} /></p>
                    {(diff===0)?<p className="pt-3 p-2  text-white">Simple</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setDiff(0)}>Simple</p>}
                    {(diff===1)?<p className="pt-3 p-2  text-white">Punctuation</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setDiff(1)}>Punctuation</p>}
                    {(diff===2)?<p className="pt-3 p-2  text-white">Numbers</p>:<p className="pt-3 p-2   text-orange-200" onClick={()=>setDiff(2)}>Numbers</p>}
                    {(diff===3)?<p className="pt-3 p-2  text-white">Coding</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setDiff(3)}>Coding</p>}
                </div>
                <div className="flex col-span-2 text-sm sm:text-lg">
                    <p className={`${(durpar===1)?'text-white':''} p-3`} onClick={()=>setDurPar(1)}>Duration</p>
                    <p className={`${(durpar===2)?'text-white':''} p-3`} onClick={()=>setDurPar(2)}>Paragraph</p>
                </div>
                {(durpar===1)&&<div className="flex ml-2 col-span-2 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faClock} /></p>
                    {(countDown===15)?<p className="pt-3 p-2 text-white">15</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(15)}>15</p>}
                    {(countDown===30)?<p className="pt-3 p-2 text-white">30</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(30)}>30</p>}
                    {(countDown===60)?<p className="pt-3 p-2  text-white">60</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(60)}>60</p>}
                    {(countDown===100)?<p className="pt-3 p-2  text-white">100</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(100)}>100</p>}
                </div>}
                {(durpar===2)&&<div className="flex ml-2 col-span-2 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faParagraph} /></p>
                    {(countDown===15)?<p className="pt-3 p-2 text-white">15</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(15)}>15</p>}
                    {(countDown===30)?<p className="pt-3 p-2 text-white">30</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(30)}>30</p>}
                    {(countDown===60)?<p className="pt-3 p-2  text-white">60</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(60)}>60</p>}
                    {(countDown===100)?<p className="pt-3 p-2  text-white">100</p>:<p className="pt-3 p-2  text-orange-200" onClick={()=>setCountDown(100)}>100</p>}
                </div>}
            </div>:<></>}
        </div>
    )
}

export default HomePage;