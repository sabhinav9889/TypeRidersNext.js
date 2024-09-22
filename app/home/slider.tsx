import { useContext, useRef, useState} from "react";
import {messageData} from "../context";
import { myTheme } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../constant";
import Garage from "./garage";
const Slider = ()=>{
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, cur, setCur, drawer, setDrawer, livewpm, setlivewpm, sound ,setSound, gar, setGarage} = contextValue!;
    return(
        <>
          <div className={`overflow-hidden md:w-60 w-20 absolute z-30 right-0 min-h-screen`}>
          <div className={`w-72 min-h-screen absolute z-30 ${myTheme[theme]} border-orange-900 border rounded-sm transition-transform ${drawer?'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}>
            <div className="w-full mt-16 md:flex md:justify-centre">
            <div className={`w-14 h-7 rounded-full border-white ${(livewpm)?'bg-orange-300':'bg-slate-200'} cursor-pointer`} onClick={()=>setlivewpm((prev)=>(prev)?false:true)}>
              <div className={`bg-white rounded-full w-7 h-7 ${(livewpm)?'translate-x-full':'translate-x-0'} duration-300 ease-in-out`}></div>
            </div>
              <p className="md:pl-4 pr-4 md:text-lg text-orange-200">Live WPM</p></div>
            <div className="w-full mt-16 md:flex md:justify-centre">
              <div className={`w-14 h-7 rounded-full border-white ${(sound)?'bg-orange-300':'bg-slate-200'} cursor-pointer`} onClick={()=>setSound((prev)=>(prev)?false:true)}>
                <div className={`bg-white rounded-full w-7 h-7 ${(sound)?'translate-x-full':'translate-x-0'} duration-300 ease-in-out`}></div>
              </div>
              <p className="md:pl-4 pr-4 md:text-lg text-orange-200">Sound </p>
            </div>
            <div className={`w-full mt-16 ml-2 flex justify-centre ${gar?'':'text-orange-200'}`}><FontAwesomeIcon className="mt-2" size="xl" icon={Icons[0]}/><p className={`ml-2  cursor-pointer text-lg  p-2`} onClick={()=>setGarage((prev)=>(prev)?false:true)}>Garage</p></div>
          </div>
          </div>
         <div onClick={()=>setDrawer(false)}></div>
        </>
    )
}

export default Slider;