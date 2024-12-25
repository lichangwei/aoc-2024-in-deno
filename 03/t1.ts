const text = await Deno.readTextFile("./03/input.txt");

function sum(text: string){
    return Array.from(text.matchAll(/mul\((\d+),(\d+)\)/g))
    .map(([_, a, b]) => {
      return parseInt(a, 10) * parseInt(b, 10);
    })
    .reduce((a, b) => a + b, 0);
}
const result = sum(text);

console.log(result);