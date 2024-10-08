import { generate } from "random-words";

import { map, punch, coding } from "./constant";
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
function shuffleArray(array: string[]): string {
  let str: string = "";
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  for (let i = array.length - 1; i > 0; i--) {
    str += array[i];
    str += " ";
  }
  return str;
}
const generateWords = (diff: number, durpar: number, countDown: number) => {
  let wordTemp = generate({ exactly: map.get(0), maxLength: 5, join: " " });
  switch (diff) {
    case 0:
      wordTemp += generate({
        exactly: map.get(countDown),
        maxLength: 5,
        join: " ",
      });
      break;
    case 1:
      for (let i = 0; i < punch.length; i++)
        wordTemp += generate({
          exactly: map.get(countDown)! / punch.length,
          wordsPerString: 2,
          separator: punch[i],
          join: " ",
        });
      break;
    case 2:
      wordTemp += generate({
        exactly: map.get(countDown),
        maxLength: 5,
        join: " ",
      });
      for (let i = 0; i < 35; i++) wordTemp += `${getRandomInt(1, 10)} `;
      for (let i = 0; i < 35; i++) wordTemp += `${getRandomInt(10, 100)} `;
      for (let i = 0; i < 35; i++) wordTemp += `${getRandomInt(100, 1000)} `;
      break;
    case 3:
      wordTemp += generate({
        exactly: map.get(countDown / 2),
        maxLength: 5,
        join: " ",
      });
      for (let i = 0; i < coding.length; i++)
        wordTemp += generate({
          exactly: 15,
          maxLength: 5,
          wordsPerString: 2,
          separator: `${coding[i]}`,
          join: " ",
        });
      break;
    default:
      wordTemp = "";
  }
  const shuffledArray: string = shuffleArray(wordTemp.split(" "));
  return shuffledArray;
};

const reducer = (state:any, action:any)=>{
  switch(action.type){
    case 'setCaps':
      return {...state, caps:action.payload};
    case 'setWords':
      return {...state, words:action.payload};
    case 'setCursor':
      return {...state, cursor:action.payload};
    case 'setChange':
      return {...state, change:action.payload};
    case 'setTime':
      return {...state, time:action.payload};
    case 'setCountKey':
      return {...state, countKey:action.payload};
    case 'setScore':
        return {...state, score:action.payload};
    case 'setCorrect':
      return {...state, correct:action.payload};
    case 'setSeconds':
      return {...state, seconds:action.payload};
    case 'setWrongScore':
      return {...state, wrongScore:action.payload};
    case 'setLastIdx':
      return {...state, lastIdx:action.payload};
    case 'setWpm':
      return {...state, wpm:action.payload};
    case 'setSpin':
      return {...state, spin:action.payload};
    default:
      return action.payload;
  }
}

const keySound = (event: any) => {
    // if(event.key===" "){
      const audio = new Audio("/spacebar-click-keyboard-199448.mp3");
      audio.play();
    // }
    // else if(event.key==="Backspace"){
    //   const audio = new Audio("/79932-PC_keyboard_press_backspace_computer-BLASTWAVEFX-16508.wav");
    //   audio.play();
    // }
    // else{
    //   const audio = new Audio("/mech-keyboard-02-102918.mp3");
    //   audio.play();
    // }
};

export { generateWords, reducer, keySound};