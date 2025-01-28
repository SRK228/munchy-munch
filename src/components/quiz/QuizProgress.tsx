/**
 * 📊 Quiz Progress Component
 * 
 * What does this file do?
 * - Shows how far you are in the quiz
 * - Displays a cool progress bar that fills up as you answer questions
 * - Tells you which question number you're on
 * 
 * Important parts:
 * - Progress bar: The line that fills up as you progress
 * - Question counter: Shows "Question X of Y"
 * - Animations: Makes everything appear smoothly
 */

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

export const QuizProgress = ({ currentQuestionIndex, totalQuestions }: QuizProgressProps) => {
  return (
    <>
      {/* Progress bar that fills up smoothly */}
      <div className="w-full bg-white/50 rounded-full h-2 mb-8 animate-in fade-in-50 duration-700">
        <div
          className="bg-game-button-blue h-2 rounded-full transition-all duration-500"
          style={{
            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>
      {/* Question counter that slides in from the top */}
      <div className="text-center mb-6 text-gray-600 animate-in slide-in-from-top duration-500">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
    </>
  );
};