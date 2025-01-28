/**
 * This component shows all the clues for our crossword puzzle! 🤔
 * 
 * What does this component do?
 * - Displays two lists: "Across" and "Down" clues
 * - Highlights the currently selected clue
 * - Lets you click on clues to select them
 * - Makes the selected clue bigger and blue
 * 
 * The clues are organized in two sections:
 * 1. Across: Words that read from left to right
 * 2. Down: Words that read from top to bottom
 */

import { cn } from "@/lib/utils";
import { CrosswordData } from "@/types/crossword";

interface CrosswordCluesProps {
  data: CrosswordData;
  selectedClueNumber: string | null;
  selectedDirection: 'across' | 'down';
  onClueClick: (number: string, direction: 'across' | 'down') => void;
}

export const CrosswordClues = ({
  data,
  selectedClueNumber,
  selectedDirection,
  onClueClick,
}: CrosswordCluesProps) => {
  return (
    <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
      {/* Across Clues Section */}
      <div>
        <h3 className="font-bold mb-2">Across</h3>
        <div className="space-y-2">
          {Object.entries(data.across).map(([number, clueData]) => (
            <div 
              key={`across-${number}`} 
              onClick={() => onClueClick(number, 'across')}
              className={cn(
                "text-sm p-2 rounded-lg transition-colors cursor-pointer",
                selectedClueNumber === number && selectedDirection === 'across'
                  ? "bg-game-blue scale-105 transform duration-200"
                  : "hover:bg-game-blue/10"
              )}
            >
              <span className="font-bold">{number}.</span> {clueData.clue}
            </div>
          ))}
        </div>
      </div>

      {/* Down Clues Section */}
      <div>
        <h3 className="font-bold mb-2">Down</h3>
        <div className="space-y-2">
          {Object.entries(data.down).map(([number, clueData]) => (
            <div 
              key={`down-${number}`} 
              onClick={() => onClueClick(number, 'down')}
              className={cn(
                "text-sm p-2 rounded-lg transition-colors cursor-pointer",
                selectedClueNumber === number && selectedDirection === 'down'
                  ? "bg-game-blue scale-105 transform duration-200"
                  : "hover:bg-game-blue/10"
              )}
            >
              <span className="font-bold">{number}.</span> {clueData.clue}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};