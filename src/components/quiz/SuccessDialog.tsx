/**
 * 🎉 Success Dialog Component
 * 
 * What does this file do?
 * - Shows a congratulations message when you get an answer right
 * - Explains why your answer was correct
 * - Has a button to move to the next question
 * 
 * Important parts:
 * - Dialog box: The pop-up window that appears
 * - Explanation: Teaches you something interesting about your correct answer
 * - Next button: Takes you to the next question
 */

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  explanation: string;
  onNext: () => void;
}

export const SuccessDialog = ({ open, onOpenChange, explanation, onNext }: SuccessDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-green-50 animate-in scale-in-content duration-300">
        <AlertDialogHeader>
          {/* Title that bounces to celebrate */}
          <AlertDialogTitle className="text-center text-2xl animate-bounce-slow">
            🎉 Correct! 🎉
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {/* Fun fact section that fades in */}
            <div className="space-y-4 animate-in fade-in-50 duration-500">
              <p className="text-purple-600 font-semibold text-lg">
                Did you know? 🤔
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {explanation}
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* Next question button that slides up */}
        <div className="mt-6">
          <Button
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-6 rounded-xl animate-in slide-in-from-bottom duration-300"
            onClick={onNext}
          >
            NEXT QUESTION →
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};