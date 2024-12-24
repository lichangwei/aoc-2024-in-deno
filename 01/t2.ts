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

const counts = array2.reduce((map, item)=>{
    map[item] = (map[item] || 0) + 1;
    return map;
}, {} as Record<number, number>);

const result = array1.reduce(
  (sum, item) => sum + item * (counts[item] ? counts[item] : 0),
  0
);

console.log(result);
