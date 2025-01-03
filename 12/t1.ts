import _ from "lodash";

const text = await Deno.readTextFile("./12/input.txt");
const map = text.split("\n").map((line) => line.split(""));
console.log(map);

const visited = new Map<string, boolean>();

interface IData {
  area: number;
  perimeter: number;
}
function walk(i: number, j: number, data: IData = { area: 0, perimeter: 0 }) {
  if (visited.has(`${i},${j}`)) return null;
  visited.set(`${i},${j}`, true);
  data.area++;
  const char = map[i][j];
  if (i === 0 || map[i - 1][j] !== char) {
    data.perimeter++;
  } else {
    walk(i - 1, j, data);
  }
  if (j === 0 || map[i][j - 1] !== char) {
    data.perimeter++;
  } else {
    walk(i, j - 1, data);
  }
  if (j === map[i].length - 1 || map[i][j + 1] !== char) {
    data.perimeter++;
  } else {
    walk(i, j + 1, data);
  }
  if (i === map.length - 1 || map[i + 1][j] !== char) {
    data.perimeter++;
  } else {
    walk(i + 1, j, data);
  }
  return data;
}

const array = [];
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const data = walk(i, j);
    if (data) {
      console.log(map[i][j], data);
      array.push(data);
    }
  }
}
const result = array.reduce((result, data) => {
  return result + data.area * data.perimeter;
}, 0);
console.log(result);

/*
const areas = new Map<string, number>();
const perimeters = new Map<string, number>();

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const char = map[i][j];
    areas.set(char, (areas.get(char) || 0) + 1);
    let p = 0;
    if (i === 0 || map[i - 1][j] !== char) p++;
    if (i === map.length - 1 || map[i + 1][j] !== char) p++;
    if (j === 0 || map[i][j - 1] !== char) p++;
    if (j === map[i].length - 1 || map[i][j + 1] !== char) p++;
    perimeters.set(char, (perimeters.get(char) || 0) + p);
  }
}
console.log(areas, perimeters);
const result = Array.from(areas.keys()).reduce((result, char) => {
  return result + areas.get(char)! * perimeters.get(char)!;
}, 0);
console.log(result);
*/
