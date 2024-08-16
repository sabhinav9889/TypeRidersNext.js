import { faCarSide, faSailboat, faMotorcycle, faTruck, faTractor, faBiking, faEye, faEyeSlash, faHorse } from "@fortawesome/free-solid-svg-icons";

const myTheme: string[] = ["bg-zinc-800", "bg-gray-800", "bg-orange-800", "bg-slate-800", "bg-slate-400", "bg-pink-800"];
let Icons = [faCarSide, faMotorcycle, faBiking, faSailboat, faTractor, faTruck];

const keyboardButtons: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=","`","~","|",',', ".", "?", "'", "/", "-", ":", ";", '"',
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "{","}","[","]","<",">", "_"," "
]

let coding: string[] = [" { ", " } ", " + "," * "," + "," ( "," ) "," = "," ; "," @ "," % "," > "," < ", " ] "," [ "," - "," & "];

const map = new Map<number,number>([[0,80],[15,20],[30,140],[60,480],[100,720]]);
let punch: string[] = [", ",". ","! ",": ",`" `,`? `,`' `];
const typeDiff: string[] = ["Simple","Punctuation","Numbers","Coding"];
const typeDur: number[] = [15, 30, 60, 100];
const initialStates= {
    caps:false, words:"", cursor:0, change:0, time:false, countKey:0, score:-1, correct:0, seconds:0, wrongScore:0, lastIdx:0, wpm:0,  spin:false,
}
const bgList = ["bg-neutral-950","bg-gray-900","bg-orange-900", "bg-slate-900", "bg-pink-200", "bg-pink-900"];
const textList = ["text-gray-100", "text-black"];
export {myTheme, keyboardButtons, coding, map, punch, Icons, typeDiff, typeDur, initialStates, bgList, textList};