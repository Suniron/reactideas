import { Action } from "overmind";
import { Quiz } from "projects/QuizBuilder/quizData/types";

export const setIsInQuiz: Action<boolean> = ({ state }, isInQuiz: boolean) => {
  state.isInQuiz = isInQuiz;
};

export const setCurrentQuiz: Action<null | Quiz> = (
  { state },
  currentQuiz: null | Quiz
) => {
  state.currentQuiz = currentQuiz;
};

export const setAchievedQuestion: Action<boolean> = (
  { state },
  isAchieved: boolean
) => {
  if (state.currentQuiz) {
  }
};

/** 

    EXEMPLES
 
export const noArgAction: Action = (context, value) => {
  value // this becomes "void"
}

export const argAction: Action<string> = (context, value) => {
  value // this becomes "string"
}

export const noArgWithReturnTypeAction: Action<void, string> = (context, value) => {
  value // this becomes "void"

  return 'foo'
}

export const argWithReturnTypeAction: Action<string, string> = (context, value) => {
  value // this becomes "string"

  return value + '!!!'
}&
 */
