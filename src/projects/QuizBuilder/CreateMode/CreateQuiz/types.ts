import { Quiz, Question } from "projects/QuizBuilder/quizData/types";

export interface CreatedQuiz {}

export interface InfosProps {
  currentQuiz: null | Quiz;
}

export interface CreateQuizInfosProps {
  updater: (title: string, description: string, imageURL?: string) => void;
}

export interface CreateQuestionProps {
  updater: (question: string) => void;
}

export interface CreateQuizQuestionsProps {
  updater: (questions: Array<Question>) => void;
}
