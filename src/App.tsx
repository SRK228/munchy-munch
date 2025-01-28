/**
 * 🎮 Main App Component
 * 
 * What does this file do?
 * - This is the main container for our entire game!
 * - Handles navigation between different game modes
 * - Sets up important tools that other parts of the game will use
 * 
 * Important parts:
 * - QueryClientProvider: Helps us manage data in our game
 * - TooltipProvider: Lets us show helpful tooltips when hovering over things
 * - BrowserRouter: Helps us move between different screens in our game
 * - Routes: Defines which component (game screen) to show based on the current URL
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Crossword from "./pages/Crossword";
import FactOrMyth from "./pages/FactOrMyth";
import Quiz from "./pages/Quiz";

// Create a new QueryClient to manage our game's data
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* These components show notifications and messages to the player */}
      <Toaster />
      <Sonner />
      
      {/* BrowserRouter handles navigation between different game modes */}
      <BrowserRouter>
        <Routes>
          {/* Each Route defines a different screen in our game */}
          <Route path="/" element={<Index />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/fact-or-myth" element={<FactOrMyth />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;