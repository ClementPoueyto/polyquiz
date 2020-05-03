import {Answer} from './answer.models';

export interface Question {

  text: string;
  id: number;
  answers: Answer[];
  quizId?: number;
  image?: string;
  answersAreText: boolean;
}
