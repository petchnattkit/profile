const file = Bun.file('./2015/day2/input.txt');

const result = await file.text();

const presentdimensions = result.split(/\n/g);

const calcPaperSurfaceSize = (w: number, l: number, h: number) => {
  return [2*l*w, 2*w*h, 2*h*l];
}

const calPresentVolumn = (w: number, l: number, h: number) => {
  return w*l*h
}

const totalPaperSize = presentdimensions.reduce( (prev, cur) => {

  // Part 1
  const [width, long, height, ...rest] = cur.split('x');

  const w = parseInt(width);
  const l = parseInt(long);
  const h = parseInt(height);

  const volume = calPresentVolumn(w, l, h);
  
  // const [a ,b, c] = calcPaperSurfaceSize(parseInt(width), parseInt(long), parseInt(height));
  // console.log(a, b, c);
  const sortedDimension = [w, l, h].toSorted((a, b) => a - b);
  const ribbonSize = 2*sortedDimension[0] + 2*sortedDimension[1];

  return prev += (volume + ribbonSize);
}, 0)

console.log('result', totalPaperSize);