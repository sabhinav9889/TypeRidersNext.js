"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useContext, useState} from "react";
import {messageData} from "../context";
import { Icons } from "../constant";
const Garage = ()=>{
    const contextValue = useContext(messageData);
    const [idx, setIdx] = useState(0);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, cur, setCur, drawer, setDrawer, livewpm, setlivewpm, sound ,setSound, gar, setGarage, carIc, setCarIc} = contextValue!;
    return(
        <>
            <div className="flex w-full min-h-screen" onClick={()=>setDrawer(false)}>
            <button className="border absolute mt-12 w-12 h-8 rounded-md ml-12 hover:h-9" onClick={()=>setGarage(false)}>X</button>
                <div className="flex pt-52 w-full h-full cursor-pointer justify-center">
                    <span className={`md:text-9xl text-6xl sm:mr-96 ${(idx===0)?'text-orange-300':''} mr-44 fixed`} onClick={()=>setIdx((prev)=>((prev-1)>=0)?prev-1:prev)}>{"<"}</span>
                    <div className={`p-2 ${(idx===carIc)?'text-orange-300':''} md:text-9xl text-6xl hover:animate-bounce`} onClick={()=>setCarIc(idx)}>
                        <FontAwesomeIcon icon={Icons[idx]} />
                    </div>
                    <span className={`md:text-9xl text-6xl ${(idx===Icons.length-1)?'text-orange-300':''} sm:ml-96 ml-44 fixed`} onClick={()=>setIdx((prev)=>((prev+1)<Icons.length)?prev+1:prev)}>{">"}</span>
                </div>
            </div>
        </>
    )
}

export default Garage;