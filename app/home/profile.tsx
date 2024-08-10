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
    const {profile, setProfile} = contextValue!;
    // const [change, setchange] = useState(0);
    // const [File, setFile] = useState();
    // const [photo, setPhoto] = useState();
    // const handleFileUpload = (e:Event) => {
    //     const fileInput = e.target as HTMLInputElement;
    //     if (!fileInput.files || fileInput.files.length === 0) {
    //         // alert("Files list is empty");
    //         return;
    //     }
    
    //     let file = fileInput.files[0];
    
    //     /** File validation */
    //     if (!file.type.startsWith("image")) {
    //         // alert("Please select a valide image");
    //         return;
    //     }
    
    //     /** Setting file state */
    //     file = file??"empty";
    //     setFile(file); 
    //     setPhoto(URL.createObjectURL(file)); 

    //     /** Reset file input */
    //     if(e.currentTarget){
    //         e.currentTarget.type = "text";
    //         e.currentTarget.type = "file";
    //    }
    // }
    return(
        <div className="min-h-screen">
            <button className="border absolute mt-12 w-12 h-8 rounded-md ml-12 hover:h-9" onClick={()=>setProfile(false)}>X</button>
            <div className="w-full flex justify-center font-mono text-lg">
                <div className="p-24">
                    <div  className="flex justify-center">
                      {/* <div className="w-44 h-44">
                        {(photo)?<Image src={photo} width={600} height={400} alt="profile" className="rounded-md"></Image>:<Image src={'/images (2).jpg'} width={600} height={400} alt="profile" className="rounded-md"></Image>}
                      </div> */}
                      {/* <div className="absolute mt-44">
                        {(change===0)&&<button className="mt-1 border p-1 " onClick={()=>setchange(1)}>Change Avatar</button>}
                        {(change===1)&&
                        <form onSubmit={(e)=>e.preventDefault}>
                            <input type="file" className="text-sm" name='ChangeAvatar' onChange={handleFileUpload} />
                            <button className="border w-16 mt-2 h-8  text-sm text-black border-black bg-slate-200 rounded-md" >Upload</button>                    
                        </form>}
                        </div> */}
                    </div>
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