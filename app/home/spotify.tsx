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

// import React, { useState, useEffect, MouseEvent, useRef } from "react";

// const MusicPlayer: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const boxRef = useRef<HTMLDivElement>(null);

//   const [isDragging, setIsDragging] = useState(false);
//   const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseDown = (e: MouseEvent<Element, globalThis.MouseEvent>) => {
//       if (!boxRef.current || !containerRef.current) return;

//       const box = boxRef.current;
//       // const container = containerRef.current;

//       setIsDragging(true);

//       const rect = box.getBoundingClientRect();
//       setOffset({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       });

//       // Prevent default behavior to avoid text selection during dragging
//       e.preventDefault();
//     };

//     const handleMouseMove = (e: MouseEvent<Element, globalThis.MouseEvent>) => {
//       if (!isDragging || !boxRef.current || !containerRef.current) return;

//       const box = boxRef.current;
//       const container = containerRef.current;

//       const x = e.clientX - offset.x - container.offsetLeft;
//       const y = e.clientY - offset.y - container.offsetTop;

//       box.style.left = `${x}px`;
//       box.style.top = `${y}px`;

//       // Prevent default behavior to avoid text selection during dragging
//       e.preventDefault();
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//     };

//     // Attach event listeners to the document for better compatibility
//     document.addEventListener("mousedown", handleMouseDown);
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       document.removeEventListener("mousedown", handleMouseDown);
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging, offset]);

//   return (
//     <div className="relative" ref={containerRef}>
//       <div className="bg-blue-600 w-4 h-4 absolute" ref={boxRef}></div>
//     </div>
//   );
// };

// export default MusicPlayer;