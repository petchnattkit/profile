const fs = require('fs');

const file = Bun.file('./2023/day2/part2.txt');

const result = await file.text();

const arrResult = result.split(/\n/g);

let totalSumProduct = 0;

function findMinumumBall(ballStr: RegExpMatchArray | null) {
  if (!ballStr) return 0
  return ballStr.reduce( (prev, cur) => {
    const balls = cur.match(/\d+/g)?.[0] || '0';
    return parseInt(balls) >= prev ? parseInt(balls) : prev
  }, 0)
}

// Part 1
arrResult.forEach( (gameInfo) => {

    const redResult = gameInfo.match(/\d+ red/g);
    const greenResult = gameInfo.match(/\d+ green/g);
    const blueResult = gameInfo.match(/\d+ blue/g);

    const totalRedBall = findMinumumBall(redResult);
    const totalGreenBall = findMinumumBall(greenResult);
    const totalBlueBall = findMinumumBall(blueResult);

    const multiply = totalRedBall*totalGreenBall*totalBlueBall;
    console.log('r', totalRedBall, 'g', totalGreenBall, 'b', totalBlueBall, 'm', multiply);

    totalSumProduct += multiply;
});

console.log('Part2: ', totalSumProduct);
