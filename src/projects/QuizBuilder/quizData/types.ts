export interface Answer {
  text: string;
  isCorrectAnswer: boolean;
}
export interface Question {
  question: string;
  imagePath: string | null;
  answers: Array<Answer>;
}
export interface Quiz {
  name: string;
  description: string;
  illustrationPath: string | null;

  questions: Array<Question>;
}
