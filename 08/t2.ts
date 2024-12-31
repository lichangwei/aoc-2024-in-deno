import _ from "lodash";

const text = await Deno.readTextFile("./08/input.txt");
const map = text.split("\n").map((line) => line.split(""));

const chars = {};
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const char = map[i][j];
    if (char === ".") continue;
    chars[char] = chars[char] || [];
    chars[char].push([i, j]);
  }
}

function isInside(x, y) {
  return x >= 0 && x < map.length && y >= 0 && y < map[0].length;
}

function getAntiNodes(a, b, map) {
  const array = [];
  for(let i = 0; i < map.length; i++){
    const x0 = (b[0] - a[0]) * i + b[0];
    const y0 = (b[1] - a[1]) * i + b[1];
    if(isInside(x0, y0)){
      array.push(`${x0},${y0}`);
    }else{
      break;
    }
  }
  for(let i = 0; i < map.length; i++){
    const x0 = (a[0] - b[0]) * i + a[0];
    const y0 = (a[1] - b[1]) * i + a[1];
    if(isInside(x0, y0)){
      array.push(`${x0},${y0}`);
    }else{
      break;
    }
  }
  return array;
}

const result = new Set();
for (let char in chars) {
  const points = chars[char];
  const temp = new Set();
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const array = getAntiNodes(points[i], points[j], map);
      array.forEach((p) => result.add(p));
    }
  }
}

console.log(result, result.size);