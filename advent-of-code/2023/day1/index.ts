const testInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

const fs = require('fs');

const file = Bun.file('./2023/day1/input.txt');

const result = await file.text();

const arrResult = result.split(/\n/g);

// Part 1

const sum = (text: string) => {
  const getNumber = text.match(/\d/g);
  if (getNumber === null) return 0;
  return parseInt(`${getNumber[0]}${getNumber[getNumber?.length - 1]}`);
}

const p1Result = arrResult.reduce( (pre, cur) => {
  return pre += sum(cur);
}, 0)

console.log('p1: ', p1Result);

// Part 2

const numStr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const replceNumStrWithNum = (text: string) => {
  let result = text;
  numStr.forEach( (nstr, index) => {
    result = result.replaceAll(nstr, `${nstr}${index + 1}${nstr}`);
  });
  return result;
  // for(let textIndex = 0; textIndex < text.length;) {
  //   for (let kIndex = 0; kIndex < numStr.length; kIndex++) {
  //     const substr = text.substring(textIndex, textIndex + numStr[kIndex].length);
  //     // console.log(substr, numStr[kIndex]);
  //     if (substr === numStr[kIndex]) {
  //       result = result.replace(substr, `${substr}${kIndex + 1}${substr}`);
  //       textIndex += numStr[kIndex].length;
  //       break;
  //     }
  //   }
  //   textIndex++;
  // }
  // return result;
}

const p2Result = arrResult.reduce( (pre, cur) => {
  const replceStr = replceNumStrWithNum(cur);
  const sumNum = sum(replceStr);
  console.debug('compare. before: ', cur, ' result: ', replceStr, ' sum: ', sumNum);
  return pre += sumNum;
}, 0)

console.log('p2: ', p2Result);