import { readFileSync } from 'fs'

const file = readFileSync(`${__dirname}/data.txt`, 'utf-8')

const getStrategies = (file: string): string[][] => {
  return file
    .trim()
    .split('\n')
    .map((str) => str.split(' ').map(String))
}

const strategies = getStrategies(file)

enum OpponentChoices {
  Rock = 'A',
  Paper = 'B',
  Scissors = 'C',
}

enum OurChoices {
  Rock = 'X',
  Paper = 'Y',
  Scissors = 'Z',
}

enum ScoresShape {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

enum ScoresRound {
  Lose = 0,
  Tie = 3,
  Win = 6,
}

let score = 0

strategies.forEach((strategy) => {
  const [opponentChoice, ourChoice] = strategy

  if (opponentChoice === OpponentChoices.Rock) {
    if (ourChoice === OurChoices.Rock) {
      score += ScoresRound.Tie
      score += ScoresShape.Rock
    }
    if (ourChoice === OurChoices.Paper) {
      score += ScoresRound.Win
      score += ScoresShape.Paper
    }
    if (ourChoice === OurChoices.Scissors) {
      score += ScoresRound.Lose
      score += ScoresShape.Scissors
    }
  }

  if (opponentChoice === OpponentChoices.Paper) {
    if (ourChoice === OurChoices.Rock) {
      score += ScoresRound.Lose
      score += ScoresShape.Rock
    }
    if (ourChoice === OurChoices.Paper) {
      score += ScoresRound.Tie
      score += ScoresShape.Paper
    }
    if (ourChoice === OurChoices.Scissors) {
      score += ScoresRound.Win
      score += ScoresShape.Scissors
    }
  }

  if (opponentChoice === OpponentChoices.Scissors) {
    if (ourChoice === OurChoices.Rock) {
      score += ScoresRound.Win
      score += ScoresShape.Rock
    }
    if (ourChoice === OurChoices.Paper) {
      score += ScoresRound.Lose
      score += ScoresShape.Paper
    }
    if (ourChoice === OurChoices.Scissors) {
      score += ScoresRound.Tie
      score += ScoresShape.Scissors
    }
  }
})

console.log(score)
