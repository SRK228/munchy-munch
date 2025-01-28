import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { SuccessDialog } from "@/components/quiz/SuccessDialog";
import { questions } from "@/data/quiz-questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

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

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
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
    <div className="min-h-screen bg-game-bg p-4 md:p-6 lg:p-8 animate-in slide-in-from-bottom duration-700">
      <QuizHeader score={score} />
      <QuizProgress 
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <QuizQuestion
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
      />
      <SuccessDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        explanation={currentQuestion.explanation}
        onNext={handleCloseDialog}
      />
    </div>
  );
};

export default Quiz;
