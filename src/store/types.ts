import { Quiz } from "projects/QuizBuilder/quizData/types";
import { UserInfo } from "firebase";

export interface State {
  // Global:
  currentAuth: null | UserInfo;
  // QuizBuilder:
  currentQuiz: null | Quiz;
}
