import { Quiz, Question, Answer } from "projects/QuizBuilder/quizData/types";

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

export interface QuestionCardMakerProps {
  questionId: number;
  updater: (id: number, question: Question) => void;
}

export interface MakeAnswerFormProps {
  updater: (answer: Answer, answerId: number) => void;
  id: string;
}

export interface IQuestion {
  questionId: number;
  question?: Question;
}
