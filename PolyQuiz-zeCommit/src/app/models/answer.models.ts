export interface Answer {

  id: number;
  text?: string;
  isCorrect: boolean;
  image?: string;
  questionId: number;
}
