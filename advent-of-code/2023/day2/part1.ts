const fs = require('fs');

const file = Bun.file('./2023/day2/part1.txt');

const result = await file.text();

const arrResult = result.split(/\n/g);

const colours = ['red', 'green', 'blue'];

const limits = [12, 13, 14];

let totalGame = 0;
let totalSumProduct = 0;

function getTotalBall(ballStr: RegExpMatchArray | null) {
  if (!ballStr) return 0
  return ballStr.reduce( (prev, cur) => {
    const balls = cur.match(/\d+/g)?.[0] || '0';
    return prev += parseInt(balls);
  }, 0)
}

function isBallsOverLimit(ballStr: RegExpMatchArray | null, limit: number) {
  if (!ballStr) return false;
  return ballStr.every( (curTotal) => {
    const balls = curTotal.match(/\d+/g)?.[0] || '0';
    return parseInt(balls) <= limit ;
  })
}

// Part 1
arrResult.forEach( (gameInfo) => {

    const gameCount = gameInfo.match(/Game \d+/g)?.[0].match(/\d+/g)?.[0] || '0'

    const redResult = gameInfo.match(/\d+ red/g);
    const greenResult = gameInfo.match(/\d+ green/g);
    const blueResult = gameInfo.match(/\d+ blue/g);

    // Part 1
    const isRedballValid = isBallsOverLimit(redResult, limits[0]);
    const isGreenballValid = isBallsOverLimit(greenResult, limits[1]);
    const isBlueballValid = isBallsOverLimit(blueResult, limits[2]);

    // Part 2
    const totalRedBall = getTotalBall(redResult);
    const totalGreenBall = getTotalBall(greenResult);
    const totalBlueBall = getTotalBall(blueResult);

    const pass = isRedballValid && isGreenballValid && isBlueballValid
    const multiply = totalRedBall*totalGreenBall*totalBlueBall;

    if (pass) totalGame += parseInt(gameCount);
    totalSumProduct += multiply;

});

console.log('Part1: ', totalGame);
console.log('Part2: ', totalSumProduct);
