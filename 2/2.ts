const file = await Deno.readTextFile('./2/data.txt')

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

const strategies = file
  .trim()
  .split('\n')
  .map((str) => str.split(' ').map(String))

const scoreTable: Record<string, Record<string, number>> = {
  [OpponentChoices.Rock]: {
    [OurChoices.Lose]: ScoresRound.Lose + ScoresShape.Scissors,
    [OurChoices.Tie]: ScoresRound.Tie + ScoresShape.Rock,
    [OurChoices.Win]: ScoresRound.Win + ScoresShape.Paper,
  },
  [OpponentChoices.Paper]: {
    [OurChoices.Lose]: ScoresRound.Lose + ScoresShape.Rock,
    [OurChoices.Tie]: ScoresRound.Tie + ScoresShape.Paper,
    [OurChoices.Win]: ScoresRound.Win + ScoresShape.Scissors,
  },
  [OpponentChoices.Scissors]: {
    [OurChoices.Lose]: ScoresRound.Lose + ScoresShape.Paper,
    [OurChoices.Tie]: ScoresRound.Tie + ScoresShape.Scissors,
    [OurChoices.Win]: ScoresRound.Win + ScoresShape.Rock,
  },
}

const score = strategies.reduce((acc, strategy) => {
  const [opponentChoice, ourChoice] = strategy
  return acc + scoreTable[opponentChoice][ourChoice]
}, 0)

console.log(score)
