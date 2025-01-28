/**
 * 🤔 Fact or Myth Game Component
 * 
 * What does this file do?
 * - Shows nutrition statements one at a time
 * - Lets players decide if each statement is true or false
 * - Gives immediate feedback on answers
 * - Tracks the player's score
 * 
 * Important parts:
 * - Questions: List of nutrition facts and myths
 * - Scoring: Keeps track of correct answers
 * - Feedback: Shows if answers are right or wrong
 * - Progress: Shows how far along you are in the game
 */

import { useState, useEffect } from "react";
import { Home, ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface Question {
  id: number;
  text: string;
  isFactual: boolean;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Daily consistent movement is better than only an hour of vigorous activity.",
    isFactual: true,
    explanation: "Regular, consistent movement throughout the day helps maintain better overall health and metabolism! 🏃‍♂️",
  },
  {
    id: 2,
    text: "Taking a lot of carbohydrates can lead to weight gain.",
    isFactual: true,
    explanation: "Yes! Excess carbohydrates get stored as fat in our body. Balance is key! 🍚",
  },
  {
    id: 3,
    text: "Proper hydration is important during physical activity.",
    isFactual: true,
    explanation: "Water is essential for your body during exercise - it helps regulate temperature and transport nutrients! 💧",
  },
  {
    id: 4,
    text: "Ragi can help boost bone strength for athletes, prevent anaemia in girls, and promote good digestion.",
    isFactual: true,
    explanation: "Ragi is packed with calcium, iron, and fiber - making it a superfood for overall health! 💪",
  },
  {
    id: 5,
    text: "Daily vigorous physical activity without a balanced diet will help with weight loss and muscle building.",
    isFactual: true,
    explanation: "Exercise and proper nutrition work together for the best results in fitness! 🏋️‍♀️",
  },
  {
    id: 6,
    text: "Exercise gives a good mood.",
    isFactual: true,
    explanation: "Exercise releases endorphins - your body's natural mood boosters! 😊",
  },
  {
    id: 7,
    text: "You should stop your screen time at least 2 hours before sleeping to prevent insomnia.",
    isFactual: true,
    explanation: "Blue light from screens can disrupt your sleep patterns. Give your eyes a rest before bedtime! 😴",
  },
  {
    id: 8,
    text: "Antioxidants like onion or orange help boost your immunity.",
    isFactual: true,
    explanation: "These foods are rich in vitamins and antioxidants that help protect your body! 🍊",
  },
  {
    id: 9,
    text: "You should only fill your hunger 80% instead of feeling full.",
    isFactual: true,
    explanation: "This practice helps with better digestion and maintaining a healthy weight! 🍽️",
  },
  {
    id: 10,
    text: "Dry fruits help avoid constipation.",
    isFactual: true,
    explanation: "Dry fruits are rich in fiber which helps keep your digestive system healthy! 🥜",
  },
  {
    id: 11,
    text: "You should always walk for 10-30 minutes after a meal.",
    isFactual: true,
    explanation: "A short walk after meals helps with digestion and blood sugar control! 🚶‍♀️",
  },
  {
    id: 12,
    text: "It is effective in keeping a calorie deficit at this age.",
    isFactual: false,
    explanation: "Growing bodies need proper nutrition - focus on healthy eating habits instead! 🌱",
  },
  {
    id: 13,
    text: "Milk is bad.",
    isFactual: false,
    explanation: "Milk can be a good source of calcium and protein when consumed as part of a balanced diet! 🥛",
  },
  {
    id: 14,
    text: "Water cannot help weight loss.",
    isFactual: false,
    explanation: "Water helps maintain metabolism and can help you feel full! 💧",
  },
  {
    id: 15,
    text: "All fats are bad for you.",
    isFactual: false,
    explanation: "Healthy fats are essential for your body - they help absorb vitamins and provide energy! 🥑",
  },
  {
    id: 16,
    text: "You must never have unhealthy food in your life to live long and be healthy.",
    isFactual: false,
    explanation: "Balance is key - occasional treats are okay as part of a healthy lifestyle! 🍪",
  },
  {
    id: 17,
    text: "Fruit juices are better than whole fruits.",
    isFactual: false,
    explanation: "Whole fruits contain fiber and nutrients that might be lost in juicing! 🍎",
  },
  {
    id: 18,
    text: "Milk is the only source of calcium.",
    isFactual: false,
    explanation: "Many foods like leafy greens, nuts, and seeds are also rich in calcium! 🥬",
  },
  {
    id: 19,
    text: "You should have a heavy dinner.",
    isFactual: false,
    explanation: "Lighter dinners are better for digestion and sleep quality! 🌙",
  },
  {
    id: 20,
    text: "It is okay to skip meals if you are not hungry.",
    isFactual: false,
    explanation: "Regular meals help maintain energy and nutrient intake throughout the day! ⏰",
  },
  {
    id: 21,
    text: "Glucose is important for athletes during games.",
    isFactual: false,
    explanation: "While energy is important, balanced nutrition is better than pure glucose! 🏃‍♂️",
  },
];

const FactOrMyth = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Add auto-close effect for dialog
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showDialog) {
      timer = setTimeout(() => {
        setShowDialog(false);
        setShowExplanation(false);
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showDialog, currentQuestionIndex, totalQuestions]);

  const handleAnswer = (selectedAnswer: boolean) => {
    const isCorrect = selectedAnswer === currentQuestion.isFactual;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setShowExplanation(true);
      setShowDialog(true);
    } else {
      toast({
        title: "Keep trying! 💪",
        description: "Think about it again - you're learning something new!",
        className: "bg-orange-50 border-orange-200",
      });
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setShowExplanation(false);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-game-bg p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="hover:bg-white/50"
        >
          <Home className="h-6 w-6" />
        </Button>
        <div className="text-lg font-semibold">Score: {score}</div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/50 rounded-full h-2 mb-8">
        <div
          className="bg-game-button-blue h-2 rounded-full transition-all duration-500"
          style={{
            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>

      {/* Question Counter */}
      <div className="text-center mb-6 text-gray-600">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-6 transform transition-all duration-300 hover:shadow-xl max-w-2xl mx-auto">
        <h2 className="text-lg md:text-xl text-center mb-8 leading-relaxed">
          {currentQuestion.text}
        </h2>

        {/* Answer Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg rounded-xl transform transition-all duration-300 active:scale-95"
            onClick={() => handleAnswer(true)}
          >
            FACT ✓
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white py-6 text-lg rounded-xl transform transition-all duration-300 active:scale-95"
            onClick={() => handleAnswer(false)}
          >
            MYTH ✗
          </Button>
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="bg-green-50">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 hover:bg-green-100"
            onClick={handleCloseDialog}
          >
            <X className="h-4 w-4" />
          </Button>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl">
              🎉 Correct! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-lg">
              {currentQuestion.explanation}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FactOrMyth;
