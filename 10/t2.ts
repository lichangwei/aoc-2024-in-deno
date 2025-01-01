import _ from "lodash";

const text = await Deno.readTextFile("./10/input.txt");

class Node {
  constructor(x: number, y: number, value: number) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
  x: number;
  y: number;
  value: number;

  next: Node[] = [];
}

const map = text
  .split("\n")
  .map((line, i) =>
    line.split("").map((char, j) => new Node(j, i, parseInt(char, 10)))
  );

const array = [];
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const node = map[i][j];
    if (i > 0 && map[i - 1][j].value - node.value === 1) {
      node.next.push(map[i - 1][j]);
    }
    if (i < map.length - 1 && map[i + 1][j].value - node.value === 1) {
      node.next.push(map[i + 1][j]);
    }
    if (j > 0 && map[i][j - 1].value - node.value === 1) {
      node.next.push(map[i][j - 1]);
    }
    if (j < map[i].length - 1 && map[i][j + 1].value - node.value === 1) {
      node.next.push(map[i][j + 1]);
    }
    if (node.value === 0) {
      array.push(node);
    }
  }
}

function walk(node: Node, node9s: Node[]) {
  if (node.value === 9) {
    node9s.push(node);
  }
  for (const next of node.next) {
    walk(next, node9s);
  }
}

let count = 0;
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const node = map[i][j];
    if (node.value === 0) {
      const node9s: Node[] = [];
      walk(node, node9s);
      count += node9s.length;
    }
  }
}

console.log(count);
