import { readFileSync } from 'fs'
import { Priorities } from './priorities'

const file = readFileSync(`${__dirname}/data.txt`, 'utf-8')

const getRucksacks = (file: string): string[] => {
  return file.trim().split('\n')
}

const rucksacks = getRucksacks(file)

let score = 0

rucksacks.forEach((rucksack) => {
  const rucksackLength = rucksack.length
  const rucksackHalfLength = rucksackLength / 2

  const rucksackLeft = rucksack.slice(0, rucksackHalfLength)
  const rucksackRight = rucksack.slice(rucksackHalfLength, rucksackLength)

  const itemInLeftAndRight = rucksackLeft
    .split('')
    .find((item) => rucksackRight.includes(item))

  score += Priorities[itemInLeftAndRight]
})

console.log(score)
