const file = Bun.file('./2015/day3/input.txt');

const result = await file.text();

const direction = '^>v<'

const map: Record<number, Record<number, number>> = {
  '0': {
    '0': 1
  }
};

let santaPosition = [0, 0]
let roboPosition = [0, 0]

const updateMap = (map: Record<number, Record<number, number>>, [x, y]: number[]) => {
  if (!map[x]) map[x] = {};
  if (!map[x][y]) map[x][y] = 1;
  else map[x][y] += 1;
}

const updatePosition = (order: string, driver: number[]) => {
  if (order === '^') driver[1]++;
  if (order === 'v') driver[1]--;
  if (order === '>') driver[0]++;
  if (order === '<') driver[0]--;
}

result.split('').forEach( (order, index) => {
  updatePosition(order, index % 2 === 0 ? santaPosition: roboPosition);
  updateMap(map, index % 2 === 0 ? santaPosition : roboPosition);
});

const totalHouse = Object.keys(map).reduce( (prev, cur) => {
  return prev += Object.keys(map[parseInt(cur)]).length;
}, 0)

console.log(totalHouse);