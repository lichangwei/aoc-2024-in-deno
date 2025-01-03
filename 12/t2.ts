import _ from "lodash";

const text = await Deno.readTextFile("./12/input.txt");
const map = text.split("\n").map((line) => line.split(""));
console.log(map);

const visited = new Map<string, boolean>();

function addPerimeter(
  perimeters: Map<string, number[]>,
  key: string,
  index: number
) {
  if (perimeters.has(key)) {
    perimeters.get(key)!.push(index);
  } else {
    perimeters.set(key, [index]);
  }
}

interface IData {
  area: number;
  perimeter: Map<string, number[]>;
}
function walk(
  i: number,
  j: number,
  data: IData = { area: 0, perimeter: new Map<string, number[]>() }
) {
  if (visited.has(`${i},${j}`)) return null;
  visited.set(`${i},${j}`, true);
  data.area++;
  const char = map[i][j];
  // up
  if (i === 0 || map[i - 1][j] !== char) {
    addPerimeter(data.perimeter, `${i},${char},u`, j);
  } else {
    walk(i - 1, j, data);
  }
  // left
  if (j === 0 || map[i][j - 1] !== char) {
    addPerimeter(data.perimeter, `${j},${char},l`, i);
  } else {
    walk(i, j - 1, data);
  }
  // right
  if (j === map[i].length - 1 || map[i][j + 1] !== char) {
    addPerimeter(data.perimeter, `${j},${char},r`, i);
  } else {
    walk(i, j + 1, data);
  }
  // down
  if (i === map.length - 1 || map[i + 1][j] !== char) {
    addPerimeter(data.perimeter, `${i},${char},d`, j);
  } else {
    walk(i + 1, j, data);
  }
  return data;
}

let result = 0;
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const data = walk(i, j);
    if (data) {
      console.log(data.perimeter)
      const perimeter = Array.from(data.perimeter.values())
        .map((array: number[]) => {
          array = array.sort((a, b) => (a < b ? -1 : 1));
          let count = 0;
          for (let i = 0; i < array.length; i++) {
            if (array[i] - array[i - 1] !== 1) {
              count++;
            }
          }
          return count;
        })
        .reduce((result, count) => result + count, 0);
      console.log(map[i][j], data.area, perimeter);
      result += data.area * perimeter;
    }
  }
}

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
