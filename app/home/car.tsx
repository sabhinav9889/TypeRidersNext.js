"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState,  useRef} from "react";
import { Icons } from "../constant";

const Car = ({per, spin, begin}:any)=>{
    if(per>=192) per = 192;
    const [wid, setWid] = useState(0);
    const [garage, showGarage] = useState(false);
    const getWidth  =  useRef(null);
    if(getWidth.current&&wid===0){ 
        const element = getWidth.current as HTMLElement;
        setWid(Number(element.offsetWidth));
    }
    const [carIc, setCarIc ] = useState(0);
    const [hide, setHide] = useState(false);
    return(
        <div className="absolute w-full z-10 top-80 sm:top-96 sm:mt-28" ref={getWidth}>
          {(hide)&&<div className="ml-2 cursor-pointer" onClick={()=>setHide((hide)?false:true)}><FontAwesomeIcon icon={Icons[6]}></FontAwesomeIcon></div>}
        {(!hide)&&<div>
            <div className="flex">
               <div className="ml-2 cursor-pointer" onClick={()=>setHide((hide)?false:true)}><FontAwesomeIcon icon={Icons[7]}></FontAwesomeIcon></div><p className="ml-2">WPM : {per }</p>
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
            {(!begin)&&
            <div className="mt-12 flex">
               <button className="sm:text-xl text-sm pl-1 pr-1 h-10 text-orange-300" onClick={()=>showGarage((garage)?false:true)}>Garage {'>'} </button>
               {(garage)&&
                <div className="flex ml-4 cursor-pointer">
                    {
                        Icons.map((ele,i)=>i<6&&(
                            <div className={`p-2 ${(i===carIc)?'text-orange-300':''}`} onClick={()=>{setCarIc(i), showGarage(false) }}>
                                <FontAwesomeIcon icon={Icons[i]} />
                            </div>)
                        )
                    }
                </div>}
            </div>}
        </div>}
        </div>
    )
}

export default Car;
