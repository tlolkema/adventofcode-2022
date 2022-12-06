import { readFileSync } from 'fs'

const file = readFileSync(`${__dirname}/data.txt`, 'utf-8')

const getElves = (file: string): number[][] => {
  return file
    .trim()
    .split('\n\n')
    .map((str) => str.split('\n').map(Number))
}

const elvesTotals = (elves: number[][]): number[] => {
  return elves.map((elf) => elf.reduce((a, b) => a + b))
}

const elvesSorted = (elvesTotals: number[]): number[] => {
  return elvesTotals.sort((a, b) => b - a)
}

const elves = getElves(file)
const totals = elvesTotals(elves)
const sorted = elvesSorted(totals)

const topThree = sorted.slice(0, 3)
const sum = topThree.reduce((a, b) => a + b)

console.log(sum)
