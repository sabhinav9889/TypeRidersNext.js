"use client";
import { useEffect, useRef, useState, ReactNode, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";
import { messageData } from "./context";
import Car from "./car";
const singlePlayer = () => {
  const punct = "The sun, a fiery orb in the sky; blazed relentlessly—its rays, scorching everything in their path, made the earth beneath shimmer with heat waves. Mirages appearing like tantalizing illusions; teasing the weary traveler's senses. Birds, seeking refuge from the intense heat, sought shelter amidst the dense foliage. Their chirps—a symphony of survival—echoing through the sweltering air. Clouds, wispy and ethereal, drifted lazily across the azure expanse; casting fleeting shadows upon the parched land below! The wind, a gentle caress at first, gradually escalated into a fierce gale—whipping through the landscape with wild abandon, stirring up dust devils in its wake: trees, their branches swaying in a frantic dance, creaked and groaned under the relentless assault. Animals, instinctively attuned to the rhythms of nature, hunkered down in their burrows; seeking solace from the merciless elements? And yet, amidst the chaos and turmoil, there remained a sense of awe-inspiring beauty—a reminder of the raw power and untamed majesty of the natural world!";
  const numPara = "In a quaint village nestled between rolling hills, the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and annual festivities. Within the village, there were 365 houses, each with its own unique charm and history. The local market bustled with activity, vendors selling fresh produce, handmade crafts, and other goods to eager customers. Children played in the streets, their laughter echoing off the cobblestones, while adults gathered in the town square to discuss matters of importance. The church bell tolled every hour, its chime a comforting presence in the tranquil surroundings. Nearby, a river flowed steadily, its waters teeming with fish of various sizes and colors. Fields stretched out as far as the eye could see, divided into neat rows of crops—wheat 123, corn 456, and barley 789—ready for harvest. Sheep grazed lazily in pastures, their wooly coats shimmering in the sunlight. Life in the village followed a rhythm dictated by nature, a harmonious blend of tradition and modernity. Amidst it all, numbers played a vital role, from the smallest tally to the grandest calculation. The the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and followed. the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and the population numbered around 1000 souls, each person contributing to the tight-knit community's vibrancy. Throughout the year, 52 weeks passed, punctuated by the changing seasons and";
  const coding = `if (userSelection.equals("attack")) { enemyHealth -= weapon.getDamage(); for (int i = 0; i < enemyAttacks.length; i++) { if (Math.random() < enemyAttacks[i].getAccuracy()) { playerHealth -= enemyAttacks[i].getDamage(); System.out.println("Enemy " + enemyAttacks[i].getName() + " hits you for " + enemyAttacks[i].getDamage() + " damage!"); } else { System.out.println("Enemy " + enemyAttacks[i].getName() + " misses!"); } } } else if (userSelection.equals("heal")) { if (playerHealth + potion.getHealAmount() <= playerMaxHealth) { playerHealth += potion.getHealAmount(); } else { playerHealth = playerMaxHealth; } System.out.println("You heal for " + potion.getHealAmount() + " health points!"); } else { System.out.println("Invalid selection. Please choose 'attack' or 'heal'."); } while (playerHealth > 0 && enemyHealth > 0) { // Continue the combat loop... }`;
  const simple = "orange pen queen rat sun table, umbrella van watch xylophone yo-yo zoo ant bear cup desk elephant frog grape house ice jar kite lemon map nail owl pear quill rabbit snake tree unicorn violin window yarn zipper. In a quaint little village nestled amidst rolling hills and lush greenery, there lived a curious young boy named Timothy, whose days were filled with wonder and adventure. From the moment he opened his eyes in the morning to the time he drifted off to sleep at night, Timothy's imagination soared to new heights, fueled by the endless possibilities that surrounded him.";
  const { theme, setTheme,  countDown, setCountDown, diff , setDiff, begin, setBegin}= useContext(messageData);
  console.log("Lengh is : " + punct.length +" num: " + numPara.length + " coding: " + coding.length + " simple : " + simple.length);
  let words = "";
  if(diff===0) words = simple;
  else if(diff==1) words =punct;
  else if(diff==2) words =numPara;
  else words =coding;
  let lis = words.split(" ");
  let wordComp = "";
  for (let i = 0; i < lis.length; i++) { 
    lis[i] = lis[i] + " ";
    wordComp += lis[i];
  }
  const text = useRef(null);
  let dur = countDown;
  const [passage, setPassage] = useState<ReactNode | null>(null);
  const [cursor, setCursor] = useState<number>(0);
  const [change, setchange] = useState(0);
  const [time, setTime] = useState(false);
  const blink = useRef(null);
  const blurP = useRef(null);
  const [wrongSet, setWrongSet] = useState<Set<number>>(new Set<number>());
  const [countKey, setCountKey] = useState(0);
  const [score, setScore] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(countDown);
  const [wrongScore, setWrongScore] = useState(0);
  const [isWrong, setIsWrong] = useState<Set<number>>(new Set<number>());
  const [lastIdx, setLastIdx] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [blur, setBlur] = useState(1);
  const handleRefresh = ()=>{
    setCountKey(0);
    setScore(null);
    setCorrect(0);
    setSeconds(countDown);
    setWrongScore(0);
    setIsWrong((st)=>{ st.clear(); return st; });
    setLastIdx(0);
    setWpm(0);
    setBlur(1);
    setchange(0);
    setCursor(0);
    setWrongSet((set)=>{set.clear(); return set;});
    if(text.current){  text.current.style.marginTop = '32px';}
    else setScore(null); 
    if(text.current) text.current.style.marginTop = '32px';
    setTime(false);
    setBegin(false);
    if(text.current) text.current.style.filter='blur(5px)';
  }
  useEffect(() => {
    if(time){
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
      setWpm((correct/(countDown-seconds)*60));
      if(seconds===0){
        const accuracy = ((countKey-wrongScore)/countKey)*100;
        const getIdx = cursor;
        if(text.current){ 
          text.current.style.marginTop = '128px';
        }
        setScore(accuracy);
      }
      // Clear interval when component unmounts
      return () => clearInterval(interval); 
    }
    else setSeconds(countDown);
  }, [seconds,time,countDown, words]);
  // return set of wrong words
  useEffect(() => {
    let cnt = 0, sz = 0, r = 0;
    if (blink.current) {
      const loc = blink.current.getBoundingClientRect();
      //  const hgt = blink.current.offsetHeight;
      const curr = text.current.style.marginTop;
      let str = "";
      for (let i = 0; i < curr.length - 2; i++) {
        str += curr[i];
      }
      let num = parseInt(str, 10);
      if (isNaN(num)) num = 32;
      if (loc.top >= 172 && text.current){
        text.current.style.marginTop = `${num - 32}px`;
        let index = cursor;
        // localStorage.setItem("lastIndex", (index-1).toString());
        setLastIdx(index-1);
      }
    }
    // const jsonString: string | null = localStorage.getItem("mySet");
    // const startTime = new Date();

    const ans = lis.map((ele, index) => (
      <div className="inline-block pl-3 " key={index}>
        {ele.split("").map((el, idx) =>
          r++ == cursor ? (
            <span className="" key={r}>
              <span
                className={"visible text-orange-400 animate-pulse absolute z-10"}
                ref={blink}
                key={-r - 10000000}
              >
                |
              </span>
              {r > cursor ? (
                <span key={-r - 1} className="pl-2">{el}</span>
              ) : (
                <span key={-r - 1}>
                  {wrongSet.has(r - 1) ? (
                    <span className="text-red-600" key={-r - 100000}>
                      {el}
                    </span>
                  ) : (
                    <span className="text-orange-300" key={-r - 100000}>
                      {el}
                    </span>
                  )}
                </span>
              )}
            </span>
          ) : (
            <span key={r}>
              {r > cursor ? (
                <span key={-r - 1}>{el}</span>
              ) : (
                <span key={-r - 1}>
                  {wrongSet.has(r - 1) ? (
                    <span className="text-red-600" key={-r - 100000}>
                      {el}
                    </span>
                  ) : (
                    <span className="text-orange-300" key={-r - 100000}>
                      {el}
                    </span>
                  )}
                </span>
              )}
            </span>
          )
        )}
      </div>
    ));
    setPassage(ans);
  }, [change,countDown, words]);
  const handleKeyDown = (event: any) => {
    if(score) return;
    const lis: string[] = [
      "AltGraph", "Alt", "Control", "Enter", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "CapsLock", "Tab", "Escape", "Backspace", "Shift","Meta",
      "end", "F1", "F2", "F3", "F4", "F5","F6", "F7", "F8", "F9","F10", "F11", "F12", "F13", "AudioVolumeUp", "AudioVolumeDown","MediaPlay","MediaPlayPause","MediaTrackPrevious","MediaTrackNext"
    ];
    if(event.key==="Backspace"){
      let num = cursor-1;
      console.log(num+" : "+lastIdx); 
      if(num<0) return;
      if((num)<=lastIdx) return;
      if(blink.current===null) return;
      let curHgt = blink.current.getBoundingClientRect();
      if(curHgt.top<128){ 
          num++; num++;
          // localStorage.setItem("cursor",(num).toString());
          setCursor(num);
          setchange((prev)=>prev+1);
          return; 
      }
      console.log(num);
      if(wrongSet.has(num)){
        setWrongSet((set)=>{ set.delete(num); return set;});
      }
      if(isWrong.has(num)){
        setIsWrong((st)=>{ st.delete(num); return st;})
      }
      setCursor(cursor-1);
      setchange(change+1);
      return;
    }
    if(lis.includes(event.key)) return;
    if(time===false) setTime(true);
    if(event.key!==wordComp[cursor]){
      setWrongSet((set)=>set?.add(cursor));
      setIsWrong((st)=>{ st?.add(cursor); return st;});
      setWrongScore(wrongScore+1);
    }
    if(event.key===' '&&event.key===wordComp[cursor]){
      console.log("size: "+isWrong.size);
      if(isWrong.size===0){ 
        setCorrect(correct+1);   
        setLastIdx(cursor);
      }
      setIsWrong((st)=>{st.clear(); return st;});
    }
    setCountKey(countKey+1);
    setCursor(cursor+1);
    setchange(change+1);
  };
  return (
    <div className="w-full min-h-screen select-none" onKeyDown={(eve)=>handleKeyDown(eve)} tabIndex={0}>
      <div className="flex justify-center items-center">
        {(score===null)&&
        <div className="sm:p-32 p-12 h-auto">
          <div className="text-orange-400 flex justify-center mb-4 font-semibold">{seconds} sec</div>
          <div className="flex justify-center items-center">
            <div className="overflow-hidden text-2xl h-24 w-3/4">
              <div className="flex justify-center">{(blur)?<p className="absolute sm:block hidden  mt-8 font-mono  text-sm" ref={blurP}>Click here or press any key to focus</p>:<div className="hidden">Hello</div>}</div>
              <div className="overflow-hidden font-mono blur-sm" ref={text} onClick={()=>{ setBlur(0); setBegin(true); text.current.style.filter='none'; setchange((prev)=>prev+1)}} >
                {passage}
              </div>
            </div>
          </div>
          <div className="flex justify-center text-black">
            <button
              className="p-1 mt-8 text-orange-400 select-none"
              onClick={() => handleRefresh()}
            >
              <FontAwesomeIcon icon={faRotateRight} size="xl"/>
            </button>
          </div>
        </div>}
        {(score!==null)?
          <div className="">
            <div className=" mt-32 text-orange-300 mb-4"><p className="p-4 text-2xl flex justify-center">Accuracy - {score.toFixed(2)} %</p><p className="p-4 text-2xl flex justify-center">WPM - {wpm.toFixed(2)}</p></div>
            <div className="flex mt-8 justify-center text-black">
            <button
              className="p-1 text-orange-400 select-none"
              onClick={() => handleRefresh()}
            >
              <FontAwesomeIcon icon={faRotateRight} size="xl"/>
            </button>
          </div>
          </div>:<></>
        }
      </div>
      <Car per={wpm}/>
    </div>
  );
};

export default singlePlayer;