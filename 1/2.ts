const file = await Deno.readTextFile('./1/data.txt')

const elves = file
  .trim()
  .split('\n\n')
  .map((str) => str.split('\n').map(Number))

const totals = elves.map((elf) => elf.reduce((a, b) => a + b))
const sorted = totals.sort((a, b) => b - a)

const topThree = sorted.slice(0, 3)
const sum = topThree.reduce((a, b) => a + b)

console.log(sum)
