const file = await Deno.readTextFile('./1/data.txt')

const elves = file
  .trim()
  .split('\n\n')
  .map((str) => str.split('\n').map(Number))

const totals = elves.map((elf) => elf.reduce((a, b) => a + b))
const mostCalories = totals.reduce((a, b) => Math.max(a, b))

console.log(mostCalories)
