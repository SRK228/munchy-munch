export interface Cell {
  value: string;
  number?: number;
  isBlank: boolean;
  isHighlighted: boolean;
  isActive: boolean;
  isCorrect?: boolean;
}

export interface Word {
  answer: string;
  clue: string;
  direction: 'across' | 'down';
  startRow: number;
  startCol: number;
  number: number;
}

export interface Position {
  row: number;
  col: number;
}

export interface ClueData {
  clue: string;
  answer: string;
}

export interface CrosswordData {
  across: { [key: string]: ClueData };
  down: { [key: string]: ClueData };
}