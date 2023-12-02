const hasher = new Bun.CryptoHasher("md5");
const original = 'yzbqklnj';

for(let index=0;;index++) {
  hasher.update(`${original}${index}`);
  const result = hasher.digest('hex');
  // console.log(result);
  if (result.match(/^000000/)) {
    console.log('number: ', index);
    break;
  }
}