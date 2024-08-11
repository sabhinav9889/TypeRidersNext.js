"use client"
import { useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClock, faBarsProgress, faKeyboard, faParagraph, faGear} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../context";
import { myTheme, typeDiff, typeDur } from "../constant";

const HomePage = () => {
    const contextValue = useContext(messageData);
    const {theme, countDown, setCountDown, diff, setDiff, begin,  setStart,  durpar, drawer, setDrawer, gar, music} = contextValue!;
    return(
        <div className="flex">
        <div className="w-full absolute select-none font-mono z-10">
        {(begin)?<div className="p-3 flex"><FontAwesomeIcon icon={faKeyboard} size="xl" /><p className="pl-4">TypeRiders</p></div>:<></>}
            {(!begin&&!gar)&&<div className={`grid md:grid-cols-12 grid-cols-4 pr-12 ${myTheme[theme]} text-orange-300`}>
                <div className="p-3 xl:flex xl:col-span-2 hidden text-white cursor-pointer" onClick={()=>setStart(false)}><div><FontAwesomeIcon icon={faKeyboard} size="xl" /></div><p className="pl-4">TypeRiders</p></div>
                <div className="flex xl:col-span-4 col-span-6 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faBarsProgress} /></p>
                    {
                      typeDiff.map((ele, i)=>(<p key={i} className={`pt-3 p-2 cursor-pointer  ${(diff===i)?'text-white':'text-orange-200'}`} onClick={()=>setDiff(i)}>{ele}</p>))
                    }
                </div> 
                {(durpar===1)&&<div className="flex ml-2 col-span-4 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faClock} /></p>
                    {
                      typeDur.map((ele, i)=>(<p key={i} className={`pt-3 p-2 cursor-pointer ${(countDown===typeDur[i])?'text-white':'text-orange-200'}`} onClick={()=>setCountDown(typeDur[i])}>{ele}</p>))
                    }
                </div>}
                {(durpar===2)&&<div className="flex ml-2 col-span-4 text-sm sm:text-lg">
                    <p className="p-3  text-amber-300"><FontAwesomeIcon icon={faParagraph} /></p>
                    {
                      typeDur.map((ele, i)=>(<p key={i} className={`pt-3 p-2 cursor-pointer ${(countDown===typeDur[i])?'text-white':'text-orange-200'}`} onClick={()=>setCountDown(typeDur[i])}>{ele}</p>))
                    }
                </div>}
            </div>}
        </div>
        <div className={`p-2 ${(music)?'hidden':'flex'} justify-end absolute z-50 right-0 w-12`}>
          <FontAwesomeIcon icon={faGear} size="xl" className={`cursor-pointer mt-2 ${(drawer)?'text-white':'text-orange-300'} transform transition-transform hover:rotate-180`} onClick={()=>setDrawer((prev)=>(prev)?false:true)}/>
        </div>
        </div>
    )           
}

export default HomePage;