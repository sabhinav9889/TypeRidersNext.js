"use client"
// import { redirect } from "next/dist/server/api-utils";
// import Image from "next/image";
import { useState, useContext } from "react";
import { messageData } from "../context";
const Profile = () => {
    const contextValue = useContext(messageData);
    const userName = "CamLoT";
    const userEmail = "sabhinav@gmail.com";
    const avgWpm = 58;
    const avgAccuracy = 92;
    const bestWpm = 86;
    const matchPlayed = 128;
    const {setProfile} = contextValue!;
    return(
        <div className="min-h-screen">
            <button className="border absolute mt-12 w-12 h-8 rounded-md ml-12 hover:h-9" onClick={()=>setProfile(false)}>X</button>
            <div className="w-full flex justify-center font-mono text-lg">
                <div className="p-24">
                    <div className="sm:grid grid-cols-2 mt-12">
                        <p className="p-4">UserName : {userName}</p>
                        <p className="p-4">User Email : {userEmail}</p>
                        <p className="p-4">Avg. WPM : {avgWpm}</p>
                        <p className="p-4">Avg. Accuracy : {avgAccuracy}</p>
                        <p className="p-4">Best WPM : {bestWpm}</p>
                        <p className="p-4">Match Played : {matchPlayed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;