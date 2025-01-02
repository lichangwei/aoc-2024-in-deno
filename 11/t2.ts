import _ from "lodash";

const text = await Deno.readTextFile("./11/input.txt");
let array = text.split(" ").map((item) => parseInt(item, 10));

function add(map: Map<number, number>, number: number, count: number) {
  map.set(number, (map.get(number) || 0) + count);
}

function transform(map: Map<number, number>) {
  const result = new Map<number, number>();
  for (const [number, count] of map) {
    if (number === 0) {
      add(result, 1, count);
    } else if (`${number}`.length % 2 === 0) {
      const temp = `${number}`;
      const length = temp.length;
      const v1 = parseInt(temp.substring(0, length / 2), 10);
      add(result, v1, count);
      const v2 = parseInt(temp.substring(length / 2, length), 10);
      add(result, v2, count);
    } else {
      add(result, number * 2024, count);
    }
  }
  return result;
}

let map = array.reduce((map, number) => {
  add(map, number, 1);
  return map;
}, new Map<number, number>());

for (let i = 0; i < 75; i++) {
  map = transform(map);
}

const result = _.sum(Array.from(map.values()));
console.log(result);
