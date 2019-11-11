import { Quiz } from "../quizData/types";

type handleChoose = (choosedQuiz: Quiz) => void;

export interface QuizCardProps {
  quiz: Quiz;
  handleChoose: handleChoose;
}

export interface QuizCardsProps {
  handleChoose: handleChoose;
}
