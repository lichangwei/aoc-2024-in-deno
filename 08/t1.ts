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

function getAntiNodes(a, b, map) {
  const array = [];
  const x0 = b[0] - a[0] + b[0];
  const y0 = b[1] - a[1] + b[1];
  if (x0 >= 0 && x0 < map.length && y0 >= 0 && y0 < map[0].length) {
    array.push(`${x0},${y0}`);
  }
  const x1 = a[0] - b[0] + a[0];
  const y1 = a[1] - b[1] + a[1];
  if (x1 >= 0 && x1 < map.length && y1 >= 0 && y1 < map[0].length) {
    array.push(`${x1},${y1}`);
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