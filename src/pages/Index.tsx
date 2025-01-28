/**
 * This is our game's home screen! 🎮
 * 
 * What does this file do?
 * - Shows all the different games you can play
 * - Has cool animations to make everything look fun
 * - Lets you navigate to different games
 * - Shows your profile and settings
 * 
 * The screen has three main parts:
 * 1. Header: Shows the game title and your profile
 * 2. Game Modes: Shows all the games you can play
 * 3. Bottom Navigation: Quick links to different features
 */

import { Puzzle, HelpCircle, Lightbulb, ShoppingBag, BarChart2, Trophy, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { UserProfileDialog } from "@/components/UserProfileDialog";

// These are all the games you can play
const GameModes = [
  {
    title: "Crossword",
    icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6" />,
    bgColor: "bg-[#FFE1EC]",  // Light pink background
    buttonColor: "bg-[#A7C5FF]",  // Light blue button
    route: "/crossword"
  },
  {
    title: "Quiz",
    icon: <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
    bgColor: "bg-[#E1F0FF]",  // Light blue background
    buttonColor: "bg-[#FFB5D0]",  // Pink button
    route: "/quiz"
  },
  {
    title: "Fact or Myth",
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
    bgColor: "bg-[#FFF8E1]",  // Light yellow background
    buttonColor: "bg-[#E5DEFF]",  // Light purple button
    route: "/fact-or-myth"
  },
];

// These are the navigation items at the bottom of the screen
const NavItems = [
  { icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Store", route: "/store" },
  { icon: <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Progress", route: "/progress" },
  { icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Rewards", route: "/rewards" },
  { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Leaders", route: "/leaders" },
];

const Index = () => {
  // This helps us move between different screens
  const navigate = useNavigate();
  
  // This helps us show messages to the player
  const { toast } = useToast();

  // This function handles clicking on different games or features
  const handleNavigation = (route: string, label: string) => {
    // Some features are coming soon, so we show a message
    if (route === "/store" || route === "/progress" || route === "/rewards" || route === "/leaders") {
      toast({
        title: "Coming Soon!",
        description: `The ${label} feature will be available in the next update.`,
        duration: 2000,
      });
      return;
    }
    // If it's a game, take us to that game's screen
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] p-4 sm:p-6 pb-20">
      <div className="max-w-md mx-auto space-y-6 sm:space-y-8 animate-in slide-in-from-bottom duration-700">
        {/* Header with game title and profile */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mt-2 bg-white/70 rounded-xl shadow-sm backdrop-blur-md animate-in fade-in-50 duration-500">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent animate-in slide-in-from-left duration-300">
            Healthy Munching
          </h1>
          <UserProfileDialog />
        </div>

        {/* Game Mode Cards */}
        <div className="grid gap-4 sm:gap-6">
          {GameModes.map((mode, index) => (
            <Card 
              key={mode.title}
              className={`${mode.bgColor} border-none shadow-lg hover:shadow-xl p-4 sm:p-6 transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 animate-in slide-in-from-right`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="mb-1 sm:mb-2 transform transition-all duration-300 hover:rotate-12 animate-bounce-slow">
                  {mode.icon}
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold animate-in fade-in-50 duration-300">
                  {mode.title}
                </h2>
                <Button 
                  className={`${mode.buttonColor} text-gray-700 hover:opacity-90 border-none w-full mt-2 sm:mt-3 text-sm sm:text-base py-2 sm:py-3 transform transition-all duration-300 active:scale-95 animate-in fade-in-50 duration-500`}
                  onClick={() => handleNavigation(mode.route, mode.title)}
                >
                  Proceed
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t animate-in slide-in-from-bottom duration-500">
          <div className="max-w-md mx-auto flex justify-around p-3 sm:p-4">
            {NavItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.route, item.label)}
                className="flex flex-col items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 w-full max-w-[80px] animate-in fade-in-50 hover:scale-110 transform transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.icon}
                <span className="text-[10px] sm:text-xs whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;