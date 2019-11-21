import { Quiz, Question, Answer } from "projects/QuizBuilder/quizData/types";

export interface ShowQuizProps {
  quiz: Quiz;
}

export interface QuestionCardProps {
  question: Question;
  onAnswered: (resultisCorrectAnswer: boolean) => void;
}

export interface AnswerSelectorProps {
  answers: Array<Answer>;
  onAnswerSubmit: (isCorrectAnswer: boolean) => void;
}

export interface AnswerRadioButtonProps {
  answer: Answer;
  onCheckAnswer: (userCheckedAnswer: Answer) => void;
}
