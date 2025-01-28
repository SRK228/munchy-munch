/**
 * This is our main Crossword game component! 🎮
 * 
 * What does this component do?
 * - Shows the crossword puzzle grid
 * - Displays clues for across and down words
 * - Lets players type letters in cells
 * - Shows the score and progress
 * - Has buttons for verifying answers and resetting
 * 
 * Cool features:
 * - Green highlights for correct answers
 * - Red highlights for wrong answers
 * - Easy navigation back to home page
 * - Score tracking as you play
 */

import { useState } from "react";
import { ArrowLeft, Settings, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CrosswordGrid } from "@/components/crossword/CrosswordGrid";
import { CrosswordClues } from "@/components/crossword/CrosswordClues";
import { CrosswordGame } from "@/lib/crosswordGame";
import { useNavigate } from "react-router-dom";

const Crossword = () => {
  const navigate = useNavigate();
  const [game] = useState(() => new CrosswordGame());
  const [grid, setGrid] = useState(game.getGrid());
  const [score, setScore] = useState(0);

  const handleCellClick = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col].isActive = true;
    setGrid(newGrid);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>, row: number, col: number) => {
    if (event.key.match(/^[a-zA-Z]$/)) {
      const success = game.makeMove(row, col, event.key);
      if (success) {
        setGrid(game.getGrid());
      }
    }
  };

  const handleRefresh = () => {
    const newGame = new CrosswordGame();
    setGrid(newGame.getGrid());
    setScore(0);
    toast.info("Crossword puzzle has been reset!");
  };

  const verifyAnswers = () => {
    game.verifyAnswers();
    const progress = game.checkProgress();
    setScore(Math.round(progress));
    setGrid(game.getGrid());
    toast.info(`Current progress: ${Math.round(progress)}%`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-game-bg p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleBack}
            className="hover:bg-game-button-blue/20 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Puzzle 1</h1>
            <div className="text-sm font-medium">Score: {score}%</div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-game-button-blue/20 transition-colors"
          >
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        <div className="aspect-square w-full bg-white rounded-lg p-2 shadow-md">
          <CrosswordGrid
            grid={grid}
            onCellClick={handleCellClick}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="flex justify-between items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            className="rounded-full hover:bg-game-button-blue/20 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </Button>
          
          <Button
            variant="secondary"
            onClick={verifyAnswers}
            className="px-8 py-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
          >
            Verify
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-game-button-blue/20 transition-colors"
          >
            <LightbulbIcon className="w-6 h-6" />
          </Button>
        </div>

        <CrosswordClues
          data={game.getClues()}
          selectedClueNumber={null}
          selectedDirection="across"
          onClueClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Crossword;