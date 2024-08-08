"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState,  useContext} from "react";
import {messageData} from "../context";
import { Icons } from "../constant";
const garage = ()=>{
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, cur, setCur, drawer, setDrawer, livewpm, setlivewpm, sound ,setSound, gar, setGarage, carIc, setCarIc} = contextValue!;
    return(
        <>
            <div className="flex w-full min-h-screen" onClick={()=>setDrawer(false)}>
            <button className="border absolute mt-12 w-12 h-8 rounded-md ml-12 hover:h-9" onClick={()=>setGarage(false)}>X</button>
                <div className="flex ml-44 mt-56 cursor-pointer">
                    {
                        Icons.map((ele,i)=>(
                            <div className={`p-2 ${(i===carIc)?'text-orange-300':''} text-9xl  hover:animate-bounce`} key={i} onClick={()=>setCarIc(i)}>
                                <FontAwesomeIcon icon={Icons[i]} />
                            </div>)
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default garage;