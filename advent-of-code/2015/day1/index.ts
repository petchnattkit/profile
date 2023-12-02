const file = Bun.file('./2015/day1/input.txt');

const result = await file.text();

const navigationAction = {
  '(': 1,
  ')': -1
} as const

let navigation: (keyof typeof navigationAction)[] = [];

let firstBasementPosition = -1;

const floor = result.split('').reduce( (prev, cur, index) => {
  const result = prev += navigationAction[cur as keyof typeof navigationAction];
  if (firstBasementPosition === -1 && result < 0) {
    console.log('enter basement: ', index + 1);
    firstBasementPosition = index + 1;
  }
  return result;
}, 0);

console.log('Part 1:', floor);