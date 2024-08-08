"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState,  useRef, useContext} from "react";
import { Icons } from "../constant";
import {messageData} from "../context";

const Car = ({per, spin}:any)=>{
    if(per>=192) per = 192;
    const [wid, setWid] = useState(0);
    const getWidth  =  useRef(null);
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, cur, setCur, drawer, setDrawer, livewpm, setlivewpm, sound ,setSound, gar, setGarage, carIc, setCarIc} = contextValue!;
    if(getWidth.current&&wid===0){ 
        const element = getWidth.current as HTMLElement;
        setWid(Number(element.offsetWidth));
    }
    return(
        <div className="absolute w-full z-10 top-80 sm:top-96 sm:mt-28" ref={getWidth}>
        <div>
            <div className="flex">
               <div className="mb-1 cursor-pointer"></div><p className="ml-2">WPM : {per }</p>
            </div>
            <div className="mt-2 text-sm  sm:text-3xl">
                <div className="flex pl-1"><FontAwesomeIcon icon={Icons[carIc]} size="2xl" className={`text-orange-400  ${(spin)?'animate-spin':'animate-bounce'} `} style={{marginLeft:`${wid*((per)/200)}px`}}/></div>
            </div>
            <hr className="w-full"/>
            <div className="flex">
                 <div className="flex w-full">
                    <div className="absolute left-0">
                        <p className="flex justify-center">^</p>
                        <p className="flex justify-center">0 WPM</p>
                    </div>
                    <div className="absolute left-1/4">
                        <p className="flex justify-center">^</p>
                        <p className="flex justify-center">50 WPM</p>
                    </div>
                </div>
                    <div className={`absolute left-1/2`}>
                        <p className="flex justify-center">^</p>
                        <p className="flex justify-center">100 WPM</p>
                    </div>
                    <div className="absolute left-3/4"> 
                        <p className="flex justify-center">^</p>
                        <p className="flex justify-center">150 WPM</p>
                    </div>
                    <div className="absolute right-0 hidden sm:block">
                        <p className="pl-6">^</p>
                        <p className="">200 WPM</p>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Car;
