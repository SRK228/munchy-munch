/**
 * 🍎 Food Card Component
 * 
 * What does this file do?
 * - Shows a draggable food item with its image and name
 * - Makes the food item look cool with animations
 * - Handles the start of drag operations
 * 
 * Important parts:
 * - Draggable: You can pick up and move the food card
 * - Animations: Card scales and fades when dragged
 * - Image: Shows what the food looks like
 */

import { cn } from "@/lib/utils";

interface FoodCardProps {
  name: string;
  category: string;
  image: string;
  isDragging?: boolean;
  onDragStart: (e: React.DragEvent, food: { name: string; category: string }) => void;
}

const FoodCard = ({ name, category, image, isDragging, onDragStart }: FoodCardProps) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, { name, category })}
      className={cn(
        "bg-white rounded-xl shadow-lg p-4 cursor-move transition-transform",
        "hover:scale-105 active:scale-95",  // Makes the card bigger on hover and smaller when clicked
        isDragging ? "opacity-50" : "opacity-100"  // Makes the card fade when being dragged
      )}
    >
      <img src={image} alt={name} className="w-20 h-20 object-contain mx-auto mb-2" />
      <p className="text-center font-medium text-gray-700">{name}</p>
    </div>
  );
};

export default FoodCard;