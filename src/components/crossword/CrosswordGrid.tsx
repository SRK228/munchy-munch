import { CrosswordCell } from "./CrosswordCell";
import { Cell } from "@/types/crossword";

interface CrosswordGridProps {
  grid: Cell[][];
  onCellClick: (row: number, col: number) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>, row: number, col: number) => void;
}

export const CrosswordGrid = ({
  grid,
  onCellClick,
  onKeyPress
}: CrosswordGridProps) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-0.5 h-[390px]">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <CrosswordCell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              onClick={() => onCellClick(rowIndex, colIndex)}
              onKeyDown={(e) => onKeyPress(e, rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};