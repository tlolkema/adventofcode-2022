import { priorities } from './priorities.ts'

const file = await Deno.readTextFile('./3/data.txt')

const rucksacks = file.trim().split('\n')

let score = 0

rucksacks.forEach((rucksack) => {
  const rucksackLength = rucksack.length
  const rucksackHalfLength = rucksackLength / 2

  const rucksackLeft = rucksack.slice(0, rucksackHalfLength)
  const rucksackRight = rucksack.slice(rucksackHalfLength, rucksackLength)

  const itemInLeftAndRight = rucksackLeft
    .split('')
    .find((item) => rucksackRight.includes(item))

  itemInLeftAndRight != undefined
    ? (score += priorities[itemInLeftAndRight])
    : null
})

console.log(score)
