const text = await Deno.readTextFile("./03/input.txt");

function sum(text: string) {
  return Array.from(text.matchAll(/mul\((\d+),(\d+)\)/g))
    .map(([_, a, b]) => {
      return parseInt(a, 10) * parseInt(b, 10);
    })
    .reduce((a, b) => a + b, 0);
}

const result = text
  .split(/(do(?:n't)?\(\))/g)
  .filter((item, index, array) => {
    return !(
      item === "don't()" ||
      item === "do()" ||
      array[index - 1] === "don't()"
    );
  })
  .map(sum)
  .reduce((a, b) => a + b, 0);

console.log(result);
