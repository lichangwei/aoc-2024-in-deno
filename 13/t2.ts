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
  target[0] += 10000000000000;
  target[1] += 10000000000000;
  const j = (target[0] * a[1] - target[1] * a[0]) / (b[0] * a[1] - b[1] * a[0]);
  const i = (target[0] - j * b[0]) / a[0];
  if (_.isInteger(i) && _.isInteger(j)) {
    return i * 3 + j;
  } else {
    return 0;
  }
});

console.log(_.sum(result));
