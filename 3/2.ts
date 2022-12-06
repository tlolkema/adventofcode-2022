import { readFileSync } from 'fs'

const file = readFileSync(`${__dirname}/data.txt`, 'utf-8')

const getRucksacks = (file: string): string[] => {
  return file.trim().split('\n')
}

const rucksacks = getRucksacks(file)
