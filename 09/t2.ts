import _ from "lodash";

const text = await Deno.readTextFile("./09/input.txt");

let array = text.split("").map((char, i) => {
  const value = i % 2 === 1 ? "." : Math.floor(i / 2);
  const array = new Array(parseInt(char, 10));
  array.fill(value);
  return array;
});

// console.log(array);

for (let j = array.length - 1; j > 0; j--) {
  if (array[j].length === 0 || array[j][0] === ".") continue;
  for (let i = 0; i < j; i++) {
    if (array[i].length !== 0 && array[i][0] !== ".") continue;
    if (array[i].length < array[j].length) {
      continue;
    } else if (array[i].length === array[j].length) {
      [array[i], array[j]] = [array[j], array[i]];
      break;
    } else {
      array[i].length = array[i].length - array[j].length;
      array.splice(i, 0, [...array[j]]);
      j++;
      array[j].fill(".");
      break;
    }
  }
}
// console.log(array);
array = array.flat();
// console.log(array);

let result = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] !== ".") {
    result += array[i] * i;
  } else {
    continue;
  }
}
console.log(result);
