import { State } from "./types";
import { quizTest } from "projects/QuizBuilder/quizData/quizDataTest";

export const state: State = {
  // Global:
  currentAuth: null,
  // Quiz Builder:
  // -- Show Mode:
  currentQuiz: null,
  // -- Create Mode:
  currentCreatedQuiz: null,
  // -- All Quiz :
  allQuiz: [quizTest] // Init with an exemple
};
