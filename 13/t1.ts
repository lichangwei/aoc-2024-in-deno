import _ from "lodash";

const text = await Deno.readTextFile("./13/input.txt");

const machines = text.split("\n\n").map((part: string) => {
  return part.split("\n").map((line) => {
    return Array.from(line.matchAll(/\d+/g)).map(Number);
  });
});
console.log(machines);

const result = machines.map((machine) => {
  const [a, b, target] = machine;
  const array = [];
  for (let i = 0; i <= Math.floor(target[0] / a[0]); i++) {
    const j = (target[0] - i * a[0]) / b[0];
    if (_.isInteger(j) && i * a[1] + j * b[1] === target[1]) {
      array.push(i * 3 + j);
    }
  }
  return _.min(array);
});

console.log(_.sum(result));
