const text = await Deno.readTextFile("./04/input.txt");

const a = text.split("\n").map((line) => line.split(""));

let count = 0;
for (let i = 1; i < a.length - 1; i++) {
  for (let j = 1; j < a[i].length - 1; j++) {
    if (a[i][j] !== "A") continue;
    if (
      ((a[i - 1][j - 1] === "M" && a[i + 1][j + 1] === "S") ||
        (a[i - 1][j - 1] === "S" && a[i + 1][j + 1] === "M")) &&
      ((a[i - 1][j + 1] === "M" && a[i + 1][j - 1] === "S") ||
        (a[i - 1][j + 1] === "S" && a[i + 1][j - 1] === "M"))
    ) {
        count++;
    }
  }
}

console.log(count);
