"use client"
import {useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faXmark ,faSailboat, faMotorcycle, faTruck, faEye, faEyeSlash, faHorse, faTractor, faBiking } from "@fortawesome/free-solid-svg-icons";
const Car = ({per, spin}:any)=>{
    // const speed = Math.max(2, 70-per);
    if(per>=192) per = 192;
    const [wid, setWid] = useState(0);
    const [garage, showGarage] = useState(false);
    const getWidth  =  useRef(null);
    if(getWidth.current&&wid===0){ 
        const element = getWidth.current as HTMLElement;
        setWid(Number(element.offsetWidth));
    }
    // if(getWidth.current) console.log(getWidth.current.getBoundingClientRect());
    const [carIc, setCarIc ] = useState(0);
    const [hide, setHide] = useState(false);
    let car = faCarSide;
    if(carIc===1) car = faMotorcycle;
    if(carIc===2) car = faBiking;
    else if(carIc===3) car =  faSailboat;
    else if(carIc===4) car = faTractor;
    else if(carIc===5) car = faHorse;
    else if(carIc===6) car = faTruck;
    return(
        <div className="absolute w-full z-10 mt-10" ref={getWidth}>
          {(hide)&&<div className="ml-2 cursor-pointer" onClick={()=>setHide((hide)?false:true)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></div>}
        {(!hide)&&<div>
            <div className="flex">
               <div className="ml-2 cursor-pointer" onClick={()=>setHide((hide)?false:true)}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></div><p className="ml-2">WPM : {per }</p>
            </div>
            <div className="mt-2">
                <div className="flex pl-4"><FontAwesomeIcon icon={car} size="2xl" className={`text-orange-400  ${(spin)?'animate-spin':'animate-bounce'} `} style={{marginLeft:`${wid*((per)/200)}px`}}/></div>
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
                    <div className="absolute left-1/2">
                        <p className="flex justify-center">^</p>
                        <p className="flex justify-center">100 WPM</p>
                    </div>
                    <div className="absolute left-3/4">
                        <p className="flex justify-center">^</p>
                        <p className="flex justify-center">150 WPM</p>
                    </div>
                    <div className="absolute right-0">
                        <p className="pl-6">^</p>
                        <p className="">200 WPM</p>
                    </div>
            </div>
            <div className="mt-24 flex ">
               <button className="text-xl  pl-1 pr-1 h-10 text-orange-300" onClick={()=>showGarage((garage)?false:true)}>Garage {'>'} </button>
               {(garage)&&
                <div className="flex ml-4 cursor-pointer">
                    <div className={`p-2 ${(carIc===0)?'text-orange-300':''}`} onClick={()=>{setCarIc(0), showGarage(false) }}>
                       <FontAwesomeIcon icon={faCarSide}  size="lg"/>
                    </div>
                    <div className={`p-2 ${(carIc===1)?'text-orange-300':''}`} onClick={()=>{setCarIc(1), showGarage(false) }}>
                       <FontAwesomeIcon icon={faMotorcycle}  size="lg"/>
                    </div>
                    <div className={`p-2 ${(carIc===2)?'text-orange-300':''}`} onClick={()=>{setCarIc(2), showGarage(false) }}>
                       <FontAwesomeIcon icon={faBiking}  size="lg"/>
                    </div>
                    <div className={`p-2 ${(carIc===3)?'text-orange-300':''}`} onClick={()=>{setCarIc(3), showGarage(false) }}>
                       <FontAwesomeIcon icon={faSailboat} size="lg" />
                    </div>
                    <div className={`p-2 ${(carIc===4)?'text-orange-300':''}`} onClick={()=>{setCarIc(4), showGarage(false) }}>
                       <FontAwesomeIcon icon={faTractor} size="lg" />
                    </div>
                    <div className={`p-2 ${(carIc===5)?'text-orange-300':''}`} onClick={()=>{setCarIc(5), showGarage(false) }}>
                       <FontAwesomeIcon icon={faHorse} size="lg" />
                    </div>
                    <div className={`p-2 ${(carIc===6)?'text-orange-300':''}`} onClick={()=>{setCarIc(6), showGarage(false) }}>
                       <FontAwesomeIcon icon={faTruck}  size="lg"/>
                    </div>
                </div>}
            </div>
        </div>}
        </div>
    )
}

export default Car;
