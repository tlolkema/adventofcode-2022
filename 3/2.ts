import { readFileSync } from 'fs'
import { Priorities } from './priorities'

const file = readFileSync(`${__dirname}/data.txt`, 'utf-8')

const getRucksacks = (file: string): string[] => {
  return file.trim().split('\n')
}

const rucksacks = getRucksacks(file)

let score = 0

for (let i = 0; i < rucksacks.length; i += 3) {
  const rucksackGroup = rucksacks.slice(i, i + 3)

  const itemInFirstTwoRucksacks = rucksackGroup[0].split('').filter((char) => {
    return rucksackGroup[1].includes(char)
  })

  const commonCharacter = itemInFirstTwoRucksacks.find((char) => {
    return rucksackGroup[2].includes(char)
  })

  score += Priorities[commonCharacter]
}

console.log(score)
