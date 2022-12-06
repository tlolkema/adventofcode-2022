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
  Lose = 'X',
  Tie = 'Y',
  Win = 'Z',
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
    if (ourChoice === OurChoices.Lose) {
      score += ScoresRound.Lose
      score += ScoresShape.Scissors
    }
    if (ourChoice === OurChoices.Tie) {
      score += ScoresRound.Tie
      score += ScoresShape.Rock
    }
    if (ourChoice === OurChoices.Win) {
      score += ScoresRound.Win
      score += ScoresShape.Paper
    }
  }

  if (opponentChoice === OpponentChoices.Paper) {
    if (ourChoice === OurChoices.Lose) {
      score += ScoresRound.Lose
      score += ScoresShape.Rock
    }
    if (ourChoice === OurChoices.Tie) {
      score += ScoresRound.Tie
      score += ScoresShape.Paper
    }
    if (ourChoice === OurChoices.Win) {
      score += ScoresRound.Win
      score += ScoresShape.Scissors
    }
  }

  if (opponentChoice === OpponentChoices.Scissors) {
    if (ourChoice === OurChoices.Lose) {
      score += ScoresRound.Lose
      score += ScoresShape.Paper
    }
    if (ourChoice === OurChoices.Tie) {
      score += ScoresRound.Tie
      score += ScoresShape.Scissors
    }
    if (ourChoice === OurChoices.Win) {
      score += ScoresRound.Win
      score += ScoresShape.Rock
    }
  }
})

console.log(score)