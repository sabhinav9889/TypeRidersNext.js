"use client"
import { Spotify } from "react-spotify-embed";
// import { useEffect, useRef} from "react";

const MusicPlayer = () => {
    return(
        <div className={'w-80 h-40 overflow-hidden absolute right-0 top-80'}>
              <Spotify link="https://open.spotify.com/playlist/7ld7q89dE5etlqq60XTiVy?si=6b76321167954bd2" className="h-40 absolute z-10"/>
        </div>
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