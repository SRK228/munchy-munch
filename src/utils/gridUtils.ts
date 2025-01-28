import { Cell, Word } from "@/types/crossword";

export const createEmptyGrid = (rows: number, cols: number): Cell[][] => {
  return Array(rows).fill(null).map(() =>
    Array(cols).fill(null).map(() => ({
      value: '',
      isBlank: true,
      isHighlighted: false,
      isActive: false
    }))
  );
};

export const initializeGridWithWords = (grid: Cell[][], words: Word[]): Cell[][] => {
  const newGrid = [...grid];
  
  words.forEach(word => {
    let { startRow, startCol } = word;
    const chars = word.answer.split('');

    chars.forEach((char, index) => {
      if (word.direction === 'across') {
        newGrid[startRow][startCol + index] = {
          value: '',
          isBlank: false,
          isHighlighted: false,
          isActive: false,
          ...(index === 0 && { number: word.number })
        };
      } else {
        newGrid[startRow + index][startCol] = {
          value: '',
          isBlank: false,
          isHighlighted: false,
          isActive: false,
          ...(index === 0 && { number: word.number })
        };
      }
    });
  });

  return newGrid;
};

export const getCorrectValueForCell = (row: number, col: number, words: Word[]): string | null => {
  for (const word of words) {
    const chars = word.answer.split('');
    if (word.direction === 'across') {
      for (let i = 0; i < chars.length; i++) {
        if (word.startRow === row && word.startCol + i === col) {
          return chars[i];
        }
      }
    } else {
      for (let i = 0; i < chars.length; i++) {
        if (word.startRow + i === row && word.startCol === col) {
          return chars[i];
        }
      }
    }
  }
  return null;
};