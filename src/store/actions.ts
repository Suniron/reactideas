import { Action } from "overmind";
import { Quiz, Question } from "projects/QuizBuilder/quizData/types";

export const setCurrentQuiz: Action<null | Quiz> = (
  { state },
  currentQuiz: null | Quiz
) => {
  state.currentQuiz = currentQuiz;
};

export const setCurrentCreatedQuiz: Action<null | Quiz> = (
  { state },
  currentCreatedQuiz: null | Quiz
) => {
  state.currentCreatedQuiz = currentCreatedQuiz;
};

export const addQuestionToCurrentCreatedQuiz: Action<Question> = (
  { state },
  question: Question
) => {
  if (state.currentCreatedQuiz) {
    state.currentCreatedQuiz.questions.push(question);
  }
};

/** 

    EXEMPLES

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
