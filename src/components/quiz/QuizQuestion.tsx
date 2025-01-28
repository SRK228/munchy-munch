/**
 * ❓ Quiz Question Component
 * 
 * What does this file do?
 * - Shows the current question and its answer options
 * - Makes the answer buttons look nice and interactive
 * - Adds cool animations when options appear
 * 
 * Important parts:
 * - Question display: Shows the current question in a nice box
 * - Answer buttons: Shows all possible answers you can choose from
 * - Animations: Makes options slide in one after another
 */

import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

export const QuizQuestion = ({ question, options, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-6 transform transition-all duration-300 hover:shadow-xl max-w-2xl mx-auto animate-in fade-in-50 duration-700">
      {/* Question text that gently bounces */}
      <h2 className="text-lg md:text-xl text-center mb-8 leading-relaxed animate-bounce-slow">
        {question}
      </h2>
      {/* Container for answer buttons */}
      <div className="flex flex-col gap-4">
        {/* Each option slides in from the right with a delay */}
        {options.map((option, index) => (
          <Button
            key={option}
            className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-purple-100 py-6 text-base rounded-xl transform transition-all duration-300 active:scale-95 animate-in slide-in-from-right"
            onClick={() => onAnswer(option)}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};