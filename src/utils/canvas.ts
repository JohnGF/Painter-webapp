export function matchColor(data: Uint8ClampedArray, pos: number, r: number, g: number, b: number, a: number) {
  return data[pos] === r && data[pos + 1] === g && data[pos + 2] === b && data[pos + 3] === a;
}

export function setColor(data: Uint8ClampedArray, pos: number, r: number, g: number, b: number, a: number) {
  data[pos] = r;
  data[pos + 1] = g;
  data[pos + 2] = b;
  data[pos + 3] = a;
}
