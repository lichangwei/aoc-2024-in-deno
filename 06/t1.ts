const text = await Deno.readTextFile("./06/input.txt");

const map = text.split("\n").map((line) => line.split(""));

function find(map, char) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === char) {
        return [i, j];
      }
    }
  }
  throw new Error("Not found");
}
function walk(map) {
  const set = new Set();

  let direction = "u";
  let [i, j] = find(map, "^");

  while (true) {
    const position = `${i},${j}`;
    console.log(position);
    set.add(position);
    if (direction === "u") {
      if (i === 0) {
        break;
      } else if (map[i - 1][j] === "#") {
        direction = "r";
      } else {
        i--;
      }
    } else if (direction === "r") {
      if (j === map[i].length - 1) {
        break;
      } else if (map[i][j + 1] === "#") {
        direction = "d";
      } else {
        j++;
      }
    } else if (direction === "d") {
      if (i === map.length - 1) {
        break;
      } else if (map[i + 1][j] === "#") {
        direction = "l";
      } else {
        i++;
      }
    } else if (direction === "l") {
      if (j === 0) {
        break;
      } else if (map[i][j - 1] === "#") {
        direction = "u";
      } else {
        j--;
      }
    }
  }
  return set;
}

const result = walk(map);

console.log(result.size);
