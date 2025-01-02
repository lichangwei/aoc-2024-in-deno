import _ from "lodash";

const text = await Deno.readTextFile("./11/input.txt");
let array = text.split(" ").map((item) => parseInt(item, 10));

function transform(array: number[]) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      result.push(1);
    } else if (`${array[i]}`.length % 2 === 0) {
      const temp = `${array[i]}`;
      const length = temp.length;
      result.push(parseInt(temp.substring(0, length / 2), 10));
      result.push(parseInt(temp.substring(length / 2, length), 10));
    } else {
      result.push(array[i] * 2024);
    }
  }
  return result;
}

for(let i = 0; i < 25; i++){
    array = transform(array);
    console.log(array);
}
console.log(array.length);
