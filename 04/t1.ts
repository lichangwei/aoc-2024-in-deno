const text = await Deno.readTextFile("./04/input.txt");

const a = text.split("\n").map((line) => line.split(""));

let count = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    if (a[i][j] !== "X") continue;
    
    // 1
    if (j >= 3 && a[i][j - 1] === "M" && a[i][j - 2] === "A" && a[i][j - 3] === "S") {
      count++;
    }
    // 2
    if (j >= 3 && i >= 3 && a[i - 1][j - 1] === "M" && a[i - 2][j - 2] === "A" && a[i - 3][j - 3] === "S") {
      count++;
    }

    // 3
    if (i >= 3 && a[i - 1][j] === "M" && a[i - 2][j] === "A" && a[i - 3][j] === "S") {
      count++;
    }

    // 4
    if (i >= 3 && j <= a[i].length - 4 && a[i - 1][j + 1] === "M" && a[i - 2][j + 2] === "A" && a[i - 3][j + 3] === "S") {
      count++;
    }

    // 5
    if (j <= a[i].length - 4 && a[i][j + 1] === "M" && a[i][j + 2] === "A" && a[i][j + 3] === "S") {
      count++;
    }

    // 6
    if (i <= a.length - 4 && j <= a[i].length - 4 && a[i + 1][j + 1] === "M" && a[i + 2][j + 2] === "A" && a[i + 3][j + 3] === "S") {
      count++;
    }

    // 7
    if (i <= a.length - 4 && a[i + 1][j] === "M" && a[i + 2][j] === "A" && a[i + 3][j] === "S") {
        count++;
    }

    // 8
    if (i <= a.length - 4 && j >= 3 && a[i + 1][j - 1] === "M" && a[i + 2][j - 2] === "A" && a[i + 3][j - 3] === "S") {
      count++;
    }
  }
}

console.log(count);
