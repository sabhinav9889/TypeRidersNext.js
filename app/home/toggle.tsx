// components/ToggleMenu.js

import { useState } from "react";

const ToggleMenu = ({pass}:any) => {
  const [toggle, setToggle] = useState(false);
  if(pass==="livewpm") setToggle(true);
  return (
          <div className={`w-14 h-7 rounded-full border-white ${(toggle)?'bg-orange-300':'bg-slate-200'} cursor-pointer`} onClick={()=>setToggle((prev)=>(prev)?false:true)}>
            <div className={`bg-white rounded-full w-7 h-7 ${(toggle)?'translate-x-full':'translate-x-0'} duration-300 ease-in-out`}></div>
          </div>
  );
};

export default ToggleMenu;