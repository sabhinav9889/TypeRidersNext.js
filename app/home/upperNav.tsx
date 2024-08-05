"use client"
import { useState,useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClock, faBarsProgress, faKeyboard, faParagraph} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../context";
import { myTheme, typeDiff, typeDur } from "../constant";

const HomePage = () => {
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic, durpar, setDurPar} = contextValue!;
    const [selectTheme, setSelectedTheme] = useState(false);
    return(
        <div className="w-full absolute select-none font-mono z-10">
        {(begin)?<div className="p-3 flex"><FontAwesomeIcon icon={faKeyboard} size="xl" /><p className="pl-4">TypeRiders</p></div>:<></>}
            <div className={`grid md:grid-cols-12 grid-cols-4 pr-12 ${myTheme[theme]} text-orange-300 cursor-pointer`}>
                <div className="p-3 xl:flex xl:col-span-2 hidden text-white" onClick={()=>setStart(false)}><div><FontAwesomeIcon icon={faKeyboard} size="xl" /></div><p className="pl-4">TypeRiders</p></div>
                <div className="flex xl:col-span-4 col-span-6 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faBarsProgress} /></p>
                    {
                      typeDiff.map((ele, i)=>(<p key={i} className={`pt-3 p-2  ${(diff===i)?'text-white':'text-orange-200'}`} onClick={()=>setDiff(i)}>{ele}</p>))
                    }
                </div> 
                {(durpar===1)&&<div className="flex ml-2 col-span-2 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faClock} /></p>
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faBarsProgress} /></p>
                    {
                      typeDur.map((ele, i)=>(<p key={i} className={`pt-3 p-2  ${(countDown===typeDur[i])?'text-white':'text-orange-200'}`} onClick={()=>setCountDown(typeDur[i])}>{ele}</p>))
                    }
                </div>}
                {(durpar===2)&&<div className="flex ml-2 col-span-2 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faParagraph} /></p>
                    {
                      typeDur.map((ele, i)=>(<p key={i} className={`pt-3 p-2  ${(countDown===typeDur[i])?'text-white':'text-orange-200'}`} onClick={()=>setCountDown(typeDur[i])}>{ele}</p>))
                    }
                </div>}
            </div>
        </div>
    )
}

export default HomePage;