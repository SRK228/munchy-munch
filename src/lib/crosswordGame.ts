/**
 * This is our CrosswordGame class! 🎲
 * 
 * What does this class do?
 * - Creates and manages the crossword puzzle
 * - Keeps track of player's moves
 * - Checks if answers are correct
 * - Calculates the score
 * 
 * Cool features:
 * - Highlights correct answers in green
 * - Shows wrong answers in red
 * - Tracks progress as you play
 * - Lets you verify answers anytime
 */

import { Cell, Word, Position, CrosswordData } from "@/types/crossword";
import { crosswordWords } from "@/data/crosswordData";
import { createEmptyGrid, initializeGridWithWords, getCorrectValueForCell } from "@/utils/gridUtils";

export class CrosswordGame {
  private grid: Cell[][];
  private words: Word[];
  private currentPosition: Position | null = null;
  private readonly size = { rows: 13, cols: 12 };

  constructor() {
    this.words = crosswordWords;
    this.grid = createEmptyGrid(this.size.rows, this.size.cols);
    this.initializeGrid();
  }

  private initializeGrid(): void {
    this.grid = initializeGridWithWords(this.grid, this.words);
  }

  public makeMove(row: number, col: number, value: string): boolean {
    if (this.isValidCell(row, col)) {
      const newGrid = [...this.grid];
      newGrid[row][col].value = value.toUpperCase();
      this.grid = newGrid;
      return true;
    }
    return false;
  }

  private isValidCell(row: number, col: number): boolean {
    return row >= 0 && 
           row < this.size.rows && 
           col >= 0 && 
           col < this.size.cols && 
           !this.grid[row][col].isBlank;
  }

  public verifyAnswers(): void {
    for (let row = 0; row < this.size.rows; row++) {
      for (let col = 0; col < this.size.cols; col++) {
        if (!this.grid[row][col].isBlank) {
          const correctValue = getCorrectValueForCell(row, col, this.words);
          if (correctValue && this.grid[row][col].value.toUpperCase() === correctValue.toUpperCase()) {
            this.grid[row][col].isHighlighted = true;
            this.grid[row][col].isCorrect = true;
          } else if (this.grid[row][col].value) {
            this.grid[row][col].isHighlighted = true;
            this.grid[row][col].isCorrect = false;
          } else {
            this.grid[row][col].isHighlighted = false;
            this.grid[row][col].isCorrect = undefined;
          }
        }
      }
    }
  }

  public getClues(): CrosswordData {
    const across: { [key: string]: { clue: string; answer: string } } = {};
    const down: { [key: string]: { clue: string; answer: string } } = {};

    this.words.forEach(word => {
      if (word.direction === 'across') {
        across[word.number.toString()] = {
          clue: word.clue,
          answer: word.answer
        };
      } else {
        down[word.number.toString()] = {
          clue: word.clue,
          answer: word.answer
        };
      }
    });

    return { across, down };
  }

  public checkProgress(): number {
    let correctCells = 0;
    let totalCells = 0;

    for (let row = 0; row < this.size.rows; row++) {
      for (let col = 0; col < this.size.cols; col++) {
        if (!this.grid[row][col].isBlank) {
          totalCells++;
          const correctValue = getCorrectValueForCell(row, col, this.words);
          if (correctValue && this.grid[row][col].value.toUpperCase() === correctValue.toUpperCase()) {
            correctCells++;
          }
        }
      }
    }

    return (correctCells / totalCells) * 100;
  }

  public getGrid(): Cell[][] {
    return this.grid;
  }
}