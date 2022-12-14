const file = await Deno.readTextFile('./1/data.txt')

const getElves = (file: string): number[][] => {
  return file
    .trim()
    .split('\n\n')
    .map((str) => str.split('\n').map(Number))
}

const elvesTotals = (elves: number[][]): number[] => {
  return elves.map((elf) => elf.reduce((a, b) => a + b))
}

const elvesMostCalories = (elvesTotals: number[]): number => {
  return elvesTotals.reduce((a, b) => Math.max(a, b))
}

const elves = getElves(file)
const totals = elvesTotals(elves)
const mostCalories = elvesMostCalories(totals)

console.log(mostCalories)
