export enum Bracket {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four',
  FIVE = 'five',
}

type Range = {
  min: number;
  max: number | null;
};

export const bracketRanges: { [key in Bracket]: Range } = {
  [Bracket.ONE]: { min: 0, max: 5000 },
  [Bracket.TWO]: { min: 5000, max: 10000 },
  [Bracket.THREE]: { min: 10000, max: 15000 },
  [Bracket.FOUR]: { min: 15000, max: 20000 },
  [Bracket.FIVE]: { min: 20000, max: null },
};

export const bracketPercentage = {
  [Bracket.ONE]: 0,
  [Bracket.TWO]: 10,
  [Bracket.THREE]: 15,
  [Bracket.FOUR]: 20,
  [Bracket.FIVE]: 25,
};
