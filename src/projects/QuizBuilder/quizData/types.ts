interface answer {
  text: string;
  isCorrect: boolean;
}
interface question {
  question: string;
  imagePath: string | null;
  answers: Array<answer>;
}
export interface Quiz {
  name: string;
  description: string;
  illustrationPath: string | null;

  questions: Array<question>;
}
