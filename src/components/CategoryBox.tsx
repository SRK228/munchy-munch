/**
 * 🎯 Category Box Component
 * 
 * What does this file do?
 * - Creates a drop zone for food items
 * - Checks if the dropped food belongs to this category
 * - Shows success or error messages when foods are dropped
 * 
 * Important parts:
 * - handleDragOver: Lets foods be dragged over this box
 * - handleDrop: Checks if the dropped food is in the right category
 * - Styling: Uses cool colors and animations to look nice
 */

import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface CategoryBoxProps {
  name: string;
  color: string;
  onDrop: (food: { name: string; category: string }) => void;
}

const CategoryBox = ({ name, color, onDrop }: CategoryBoxProps) => {
  // This function lets foods be dragged over the box
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // This function runs when a food is dropped into the box
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const food = JSON.parse(e.dataTransfer.getData("food"));
    
    // Check if the food belongs in this category
    if (food.category === name) {
      toast.success("Correct! That's healthy eating! 🌟");
    } else {
      toast.error("Try again! Think about where this food belongs 🤔");
    }
    onDrop(food);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        "w-full h-32 rounded-xl border-4 border-dashed p-4",
        "flex items-center justify-center text-center",
        color
      )}
    >
      <h3 className="text-xl font-bold text-gray-700">{name}</h3>
    </div>
  );
};

export default CategoryBox;