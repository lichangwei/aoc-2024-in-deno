import _ from "lodash";

const text = await Deno.readTextFile("./07/input.txt");

const lines = text.split("\n");

function isValid(target: number, array: number[]) {
  if (array.length >= 2) {
    const initial = _.initial(array);
    const last = _.last(array);
    return (
      isValid(target - last, initial) ||
      (_.isInteger(target / last) && isValid(target / last, initial))
    );
  } else if (array.length === 1) {
    return array[0] === target;
  }
}

const array = lines
  .map((line) => {
    let [target, numbers] = line.split(": ");
    return {
      target: parseInt(target, 10),
      numbers: numbers.split(" ").map((n) => parseInt(n, 10)),
    };
  })
  .filter(({ target, numbers }) => isValid(target, numbers));
const result = _.sumBy(array, (item) => item.target);

console.log(result);
