/**
 * 📚 Quiz Questions Data
 * 
 * What does this file do?
 * - Stores all our quiz questions about nutrition and health
 * - Defines what a quiz question should look like (its structure)
 * - Makes it easy to add or change questions later
 * 
 * Each question has:
 * - An ID number (to keep track of it)
 * - The question text (what we ask the player)
 * - Four possible answers to choose from
 * - The correct answer
 * - An explanation of why that answer is correct
 * 
 * These questions help players learn about:
 * - Healthy eating habits
 * - Nutrition facts
 * - The importance of different nutrients
 * - Good lifestyle choices
 */

// This tells TypeScript what information each question must have
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Our collection of quiz questions about nutrition and health
export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many meals should you have in a day?",
    options: [
      "5",
      "3 with fasting in between",
      "4 with fasting in between",
      "6"
    ],
    correctAnswer: "3 with fasting in between",
    explanation: "Having 3 balanced meals with fasting in between helps maintain a healthy metabolism and gives your digestive system time to process nutrients efficiently! 🍽️"
  },
  {
    id: 2,
    question: "Which nutrient is most important in kids for growth?",
    options: [
      "Carbohydrates",
      "Proteins",
      "All Nutrients",
      "Vitamins"
    ],
    correctAnswer: "All Nutrients",
    explanation: "Your body needs a balance of all nutrients to grow strong and healthy! Each nutrient plays a vital role in your development. 🌱"
  },
  {
    id: 3,
    question: "Which nutrient gives instant energy?",
    options: [
      "Simple carbohydrates like fruits",
      "Fats",
      "Protein",
      "Vitamins"
    ],
    correctAnswer: "Simple carbohydrates like fruits",
    explanation: "Simple carbohydrates, especially from fruits, are quickly converted to glucose - giving you that instant energy boost! 🍎"
  },
  {
    id: 4,
    question: "Which of the following nutrients should be avoided in excess amounts?",
    options: [
      "Carbohydrates",
      "Fats",
      "Proteins",
      "All Nutrients"
    ],
    correctAnswer: "All Nutrients",
    explanation: "Balance is key! Even healthy nutrients should be consumed according to your Recommended Dietary Allowance (RDA). Too much of anything isn't good! ⚖️"
  },
  {
    id: 5,
    question: "What should your plate look like?",
    options: [
      "Half fruits and vegetables (salad); quarter proteins; quarter carbohydrates",
      "Full of proteins",
      "Half proteins; quarter carbohydrates; quarter fats",
      "Quarter fats; quarter proteins; quarter carbohydrates; quarter fruits and vegetables"
    ],
    correctAnswer: "Half fruits and vegetables (salad); quarter proteins; quarter carbohydrates",
    explanation: "A balanced plate with half fruits/vegetables, quarter proteins, and quarter carbohydrates ensures you get all the nutrients you need! 🥗"
  },
  {
    id: 6,
    question: "Why is it important to have a variety of meals?",
    options: [
      "Acquire different nutrients",
      "To have an aesthetic plate",
      "For colour",
      "None of the above"
    ],
    correctAnswer: "Acquire different nutrients",
    explanation: "Different foods contain different nutrients - eating a variety ensures your body gets everything it needs to stay healthy! 🥬"
  },
  {
    id: 7,
    question: "How does water help the body?",
    options: [
      "Flushes out toxins out of the body",
      "Regulates body temperature",
      "Helps digestion",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Water is essential for many body functions - it helps remove toxins, regulate temperature, aid digestion, and so much more! 💧"
  },
  {
    id: 8,
    question: "How many times a month can you consume junk food to satisfy cravings?",
    options: [
      "Once or twice",
      "Twice",
      "Thrice",
      "How many ever times you want"
    ],
    correctAnswer: "Once or twice",
    explanation: "It's okay to have occasional treats! Limiting junk food to once or twice a month helps maintain a healthy balance. 🍪"
  },
  {
    id: 9,
    question: "Why is magnesium present in foods like cashews important for the body?",
    options: [
      "It is not important",
      "Muscle function and relaxation, hormonal health, and sleep",
      "Enzymatic functions",
      "Nerve contraction"
    ],
    correctAnswer: "Muscle function and relaxation, hormonal health, and sleep",
    explanation: "Magnesium is a super mineral that helps your muscles relax, maintains hormone balance, and helps you sleep better! 😴"
  },
  {
    id: 10,
    question: "Why is breakfast the most important meal of the day?",
    options: [
      "To get a good taste",
      "To maintain a warm body temperature",
      "To be in a good mood for the rest of the day",
      "To get energy for the day and as rejuvenation after sleep when all nutrients are used up"
    ],
    correctAnswer: "To get energy for the day and as rejuvenation after sleep when all nutrients are used up",
    explanation: "Breakfast replenishes your energy after sleep and provides the fuel you need to start your day right! 🌅"
  },
  {
    id: 11,
    question: "How can fibrous food help your body?",
    options: [
      "Helps free excretion and prevent constipation",
      "Weight control",
      "Lowers risk of cholesterol in future",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "Fiber is amazing! It helps with digestion, maintains healthy weight, and keeps your heart healthy by managing cholesterol! 🥦"
  }
];