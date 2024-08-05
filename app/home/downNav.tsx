"use client"
import { useState,useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faAddressCard, faMusic} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../context";
import {myTheme} from '../constant';
const DownNav = () => {
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic, durpar, setDurPar, stopm, setStopm} = contextValue!;
    const [selectTheme, setSelectedTheme] = useState(false);
    return(
        <div className={`grid md:grid-cols-7 grid-cols-6 absolute z-10 bottom-0 w-full ${myTheme[theme]}  text-orange-300 cursor-pointer`}>
        <div className="flex col-span-3">
            <div className={`${(diff===4)?'text-white':'text-orange-300'} mt-3 md:ml-12 flex text-lg ml-2 md:text-2xl`} onClick={()=>setDiff((prev)=>(prev===4)?0:4)}><FontAwesomeIcon icon={faAddressCard} /><p className="ml-2 text-sm md:text-lg">Profile</p></div>
            <div className={`p-2 md:ml-3 w-28 text-sm md:text-lg  mt-1 ${(!stopm)?'text-white':''}`}><p onClick={()=>{setMusic(true); setStopm(false)}}><FontAwesomeIcon icon={faMusic}/><span className="ml-2">Music</span></p></div>
        </div>
            <div className="flex lg:col-span-2 col-span-4">
                <div className="p-2" onClick={()=>setSelectedTheme((selectTheme)?false:true)}>
                    <FontAwesomeIcon icon={faPalette} className="text-orange-300 text-2xl sm:mt-2 ml-2" size="lg"/>
                </div>
                {<div className="border bg-orange-300 rounded-3xl flex h-8 sm:mt-3 mt-1">
                    {
                        myTheme.map((ele, i)=>(
                            <div key={i} className={`ml-1 mr-1 mt-1 w-6 h-6 ${ele} rounded-full ${theme===i?'border-black border':'border-none' }`} onClick={()=>{setTheme(i); setSelectedTheme(false);}}></div>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
}

export default DownNav;