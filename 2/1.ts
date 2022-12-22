const file = await Deno.readTextFile('./2/data.txt')

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

const strategies = file
  .trim()
  .split('\n')
  .map((str) => str.split(' ').map(String))

const scoreTable: Record<string, Record<string, number>> = {
  [OpponentChoices.Rock]: {
    [OurChoices.Rock]: ScoresRound.Tie + ScoresShape.Rock,
    [OurChoices.Paper]: ScoresRound.Win + ScoresShape.Paper,
    [OurChoices.Scissors]: ScoresRound.Lose + ScoresShape.Scissors,
  },
  [OpponentChoices.Paper]: {
    [OurChoices.Rock]: ScoresRound.Lose + ScoresShape.Rock,
    [OurChoices.Paper]: ScoresRound.Tie + ScoresShape.Paper,
    [OurChoices.Scissors]: ScoresRound.Win + ScoresShape.Scissors,
  },
  [OpponentChoices.Scissors]: {
    [OurChoices.Rock]: ScoresRound.Win + ScoresShape.Rock,
    [OurChoices.Paper]: ScoresRound.Lose + ScoresShape.Paper,
    [OurChoices.Scissors]: ScoresRound.Tie + ScoresShape.Scissors,
  },
}

const score = strategies.reduce((acc, strategy) => {
  const [opponentChoice, ourChoice] = strategy
  return acc + scoreTable[opponentChoice][ourChoice]
}, 0)

console.log(score)
