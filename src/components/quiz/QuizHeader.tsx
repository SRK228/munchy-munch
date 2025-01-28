/**
 * 🎮 Quiz Header Component
 * 
 * What does this file do?
 * - Shows the score at the top of the quiz game
 * - Gives you a home button to go back to the main menu
 * - Uses cool animations to make everything look smooth
 * 
 * Important parts:
 * - Button: The home button that takes you back to the main menu
 * - Score display: Shows how many points you've earned
 * - Animations: Makes everything slide and fade in nicely
 */

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

// This tells TypeScript what information the component needs
interface QuizHeaderProps {
  score: number;
}

export const QuizHeader = ({ score }: QuizHeaderProps) => {
  // This helps us move between different screens
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center mb-8 animate-in fade-in-50 duration-500">
      {/* Home button with a cool hover effect */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate("/")}
        className="hover:bg-white/50 animate-in slide-in-from-left duration-300"
      >
        <Home className="h-6 w-6" />
      </Button>
      {/* Score display that slides in from the right */}
      <div className="text-lg font-semibold animate-in slide-in-from-right duration-300">
        Score: {score}
      </div>
    </div>
  );
};