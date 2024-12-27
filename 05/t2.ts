const text = await Deno.readTextFile("./05/input.txt");

const [section1, section2] = text.split("\n\n");

const before = section1
  .split("\n")
  .map((line) => line.split("|"))
  .reduce((map, [left, right]) => {
    map[right] = map[right] || [];
    map[right].push(left);
    return map;
  }, {});

const result = section2
  .split("\n")
  .map((line) => line.split(","))
  .filter((array) => {
    return !array.every((item, index, array) => {
      if (before[item]) {
        return before[item].every((item) => array.indexOf(item) < index);
      }
      return true;
    });
  })
  .map((array) => {
    return array.sort((a, b) => (before[a].includes(b) ? 1 : -1));
  })
  .map((array) => array[(array.length - 1) / 2])
  .reduce((sum, item) => sum + parseInt(item, 10), 0);

console.log(result);
