import { Quiz } from "./types";

export const quizTest: Quiz = {
  name: "Quiz des animaux",
  description: "Un quiz sur les animaux, bon courage ;-)",
  illustrationPath: "https://image.flaticon.com/icons/svg/616/616430.svg",
  questions: [
    {
      question: "Quel est le nom de cet animal ?",
      imagePath: "https://image.flaticon.com/icons/svg/616/616563.svg",
      answers: [
        { text: "Ours", isCorrectAnswer: false },
        { text: "Panda", isCorrectAnswer: true },
        { text: "souris", isCorrectAnswer: false },
        { text: "pigeon", isCorrectAnswer: false }
      ]
    },
    {
      question: "Combien de pattes à une Chauve-Souris?",
      imagePath: "https://image.flaticon.com/icons/svg/2219/2219690.svg",
      answers: [
        { text: "Deux", isCorrectAnswer: true },
        { text: "Quatre", isCorrectAnswer: false }
      ]
    }
  ]
};
