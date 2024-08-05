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

export { generateWords };
