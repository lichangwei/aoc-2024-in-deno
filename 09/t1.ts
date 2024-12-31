import _ from "lodash";

const text = await Deno.readTextFile("./09/input.txt");

const array = text
  .split("")
  .map((char, i) => {
    const value = i % 2 === 1 ? "." : Math.floor(i / 2);
    const array = new Array(parseInt(char, 10));
    array.fill(value);
    return array;
  })
  .flat();

let index = 0;
for (let j = array.length - 1; j > index; j--) {
  if (array[j] === ".") continue;
  for (let i = index; i < j; i++) {
    if (array[i] === ".") {
      array[i] = array[j];
      array[j] = '.';
      break;
    } else {
      continue;
    }
  }
}

let result = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] !== "."){
        result += array[i] * i;
    }else{
        break;
    }
}
console.log(result);
