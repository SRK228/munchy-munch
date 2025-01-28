import { cn } from "@/lib/utils";
import { Cell } from "@/types/crossword";

interface CrosswordCellProps {
  cell: Cell;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const CrosswordCell = ({
  cell,
  onClick,
  onKeyDown,
}: CrosswordCellProps) => {
  return (
    <div
      className={cn(
        "relative h-[30px] border transition-all duration-200",
        !cell.isBlank ? 'bg-white cursor-pointer hover:bg-game-blue/30' : 'bg-gray-200',
        cell.isActive ? 'bg-game-blue border-blue-500' : 'border-gray-300',
        cell.isHighlighted && cell.isCorrect ? 'bg-green-100' : '',
        cell.isHighlighted && !cell.isCorrect ? 'bg-red-100' : '',
        "animate-in fade-in-50 duration-200"
      )}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={!cell.isBlank ? 0 : -1}
    >
      {cell.number && (
        <span className="absolute top-0 left-0 text-[8px] font-bold p-0.5">
          {cell.number}
        </span>
      )}
      <div className="flex items-center justify-center h-full text-sm font-bold">
        {cell.value}
      </div>
    </div>
  );
};