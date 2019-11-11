import { Quiz } from "./types";

export const quizTest: Array<Quiz> = [
  {
    name: "Quiz des animaux",
    description: "Un quiz sur les animaux, bon courage ;-)",
    illustrationPath: "https://image.flaticon.com/icons/svg/616/616430.svg",
    questions: [
      {
        question: "Quel est le nom de cet animal ?",
        imagePath: "https://image.flaticon.com/icons/svg/616/616563.svg",
        answers: [
          { text: "Ours", isCorrect: false },
          { text: "Panda", isCorrect: true },
          { text: "souris", isCorrect: false },
          { text: "pigeon", isCorrect: false }
        ]
      }
    ]
  }
];
