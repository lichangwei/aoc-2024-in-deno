const text = await Deno.readTextFile("./01/input.txt");

const [array1, array2] = text.split("\n").reduce(
  (array: [number[], number[]], line: string) => {
    const [a, b] = line.split("   ").map((item) => parseInt(item));
    array[0].push(a);
    array[1].push(b);
    return array;
  },
  [[], []] as [number[], number[]]
);
array1.sort();
array2.sort();

const result = array1.reduce(
  (sum, item, index) => sum + Math.abs(array2[index] - item),
  0
);
console.log(result);
