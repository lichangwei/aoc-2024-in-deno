import _ from "lodash";

const text = await Deno.readTextFile("./14/input.txt");

const robots = text.split("\n").map((line: string) => {
  const array = Array.from(line.matchAll(/-?\d+/g)).map(Number);
  return {
    p: [array[0], array[1]],
    v: [array[2], array[3]],
  };
});
console.log(robots);

const wide = 101;
const tall = 103;

robots.forEach((robot) => {
  for (let i = 0; i < 100; i++) {
    robot.p[0] += robot.v[0];
    robot.p[1] += robot.v[1];
    if (robot.p[0] < 0) {
      robot.p[0] += wide;
    } else if (robot.p[0] >= wide) {
      robot.p[0] -= wide;
    }
    if (robot.p[1] < 0) {
      robot.p[1] += tall;
    } else if (robot.p[1] >= tall) {
      robot.p[1] -= tall;
    }
  }
});

const array = [0, 0, 0, 0];
robots.forEach(({ p }) => {
  if (p[0] < (wide - 1) / 2 && p[1] < (tall - 1) / 2) {
    array[0] += 1;
  } else if (p[0] < (wide - 1) / 2 && p[1] > (tall - 1) / 2) {
    array[1] += 1;
  } else if (p[0] > (wide - 1) / 2 && p[1] < (tall - 1) / 2) {
    array[2] += 1;
  } else if (p[0] > (wide - 1) / 2 && p[1] > (tall - 1) / 2) {
    array[3] += 1;
  } else {
    // console.log(p[0], p[1])
  }
});

console.log(array);
console.log(array[0] * array[1] * array[2] * array[3])
