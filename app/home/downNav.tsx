"use client"
import { useState,useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faClock, faBarsProgress, faKeyboard, faAddressCard, faMusic} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "./context";
import { useRouter } from 'next/navigation';
const DownNav = () => {
    const contextValue = useContext(messageData);
    const router = useRouter();
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic, durpar, setDurPar, stopm, setStopm} = contextValue!;
    const [selectTheme, setSelectedTheme] = useState(false);
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
        <div className={`grid md:grid-cols-7 grid-cols-6 absolute z-10 bottom-0 w-full h-auto ${MyTheme} text-orange-300 cursor-pointer`}>
        <div className="flex col-span-3">
            {(diff===4)?<div className=" text-white mt-3 md:ml-12 flex text-lg ml-2 md:text-2xl" onClick={()=>setDiff(4)}><FontAwesomeIcon icon={faAddressCard} /><p className="ml-2 text-sm md:text-lg">Profile</p></div>:<div className="text-orange-300 mt-3 ml-2 md:ml-12 flex text-lg md:text-2xl" onClick={()=>setDiff(4)}><FontAwesomeIcon icon={faAddressCard} /><p className="ml-2 text-sm md:text-lg">Profile</p></div>}
            <div className={`p-2 md:ml-3 w-28 text-sm md:text-lg  mt-1 ${(!stopm)?'text-white':''}`}><p onClick={()=>{setMusic(true); setStopm(false)}}><FontAwesomeIcon icon={faMusic}/><span className="ml-2">Music</span></p></div>
        </div>
            <div className="flex lg:col-span-2 col-span-4">
                <div className="p-2" onClick={()=>setSelectedTheme((selectTheme)?false:true)}>
                    <FontAwesomeIcon icon={faPalette} className="text-orange-300 text-2xl sm:mt-2 ml-2" size="lg"/>
                </div>
                {<div className="border bg-orange-300 rounded-3xl flex h-8 sm:mt-3 mt-1">
                <div className={`ml-2 mt-1 w-6 h-6 bg-black rounded-full ${theme===0?'border-black border':'border-none' }`} onClick={()=>{setTheme(0); setSelectedTheme(false);}}></div>
                <div className={`ml-2 mt-1 w-6 h-6 bg-gray-900 rounded-full ${theme===1?'border-black border':'border-none' }`} onClick={()=>{setTheme(1); setSelectedTheme(false);}}></div>
                <div className={`ml-2 mt-1 w-6 h-6 bg-orange-900 rounded-full ${theme===2?'border-black border':'border-none' }`} onClick={()=>{setTheme(2); setSelectedTheme(false);}}></div>
                <div className={`ml-2 mt-1 w-6 h-6 bg-slate-900 rounded-full ${theme===3?'border-black border':'border-none' }`} onClick={()=>{setTheme(3); setSelectedTheme(false);}}></div>
                <div className={`ml-2 mt-1 w-6 h-6 bg-pink-200 rounded-full ${theme===4?'border-black border':'border-none' }`} onClick={()=>{setTheme(4); setSelectedTheme(false);}}></div>
                <div className={`ml-2 mt-1 w-6 h-6 bg-pink-900 rounded-full ${theme===5?'border-black border':'border-none' }`} onClick={()=>{setTheme(5); setSelectedTheme(false);}}></div>
                </div>}
            </div>
        </div>
    )
}

export default DownNav;