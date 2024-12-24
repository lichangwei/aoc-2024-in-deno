const text = await Deno.readTextFile("./02/input.txt");

function isSafe(array: number[]) {
  const isIncrease = array[0] < array[1];
  let i = 0;
  for (i = 0; i < array.length - 1; i++) {
    const diff = array[i + 1] - array[i];
    if (
      (isIncrease && (diff === 1 || diff === 2 || diff === 3)) ||
      (!isIncrease && (diff === -1 || diff === -2 || diff === -3))
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const lines = text
  .split("\n")
  .map((line: string) => {
    return line.split(" ").map((item) => parseInt(item));
  })
  .filter((array: number[]) => isSafe(array));

console.log(lines.length);
