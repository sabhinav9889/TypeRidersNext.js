"use client"
import { Spotify } from "react-spotify-embed";
import { useRouter } from 'next/navigation';
import { useState,useContext} from "react";
import { messageData } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus} from "@fortawesome/free-solid-svg-icons";
// className="h-40 absolute z-10"
const MusicPlayer = () => {
    const router = useRouter();
    const contextValue = useContext(messageData);
    const {theme, setTheme, countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic, durpar, setDurPar, stopm, setStopm} = contextValue!;
    return(
        <>
         <button className={`border absolute w-6 h-6 left-0 rounded-full  hover:bg-white hover:text-black ${(music)?'z-50':'-z-50'} `} onClick={()=>setMusic(false)}>
            <FontAwesomeIcon icon={faMinus} size="xs" />
         </button>
         <button className={`border absolute text-sm  w-6 h-6 left-7 rounded-full  ${(music)?'z-50':'-z-50'} hover:bg-white hover:text-black `} onClick={()=>{setStopm(true); setMusic(false)}}>
            X
         </button>
         {(!stopm)&&<Spotify link="https://open.spotify.com/playlist/7ld7q89dE5etlqq60XTiVy?si=6b76321167954bd2" className={`w-full min-h-screen absolute ${(music)?'z-30':'-z-30'} `}/>}
        </>
    )
}

export default MusicPlayer;