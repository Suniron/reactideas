import { Quiz } from "projects/QuizBuilder/quizData/types";

export interface State {
  isInQuiz: boolean;
  currentQuiz: Quiz | null;
}

export interface Action {}
