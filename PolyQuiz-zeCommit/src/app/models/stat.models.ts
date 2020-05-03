import {Quiz} from './quiz.models';
import {Profile} from './profile.models';

export abstract class Stat {
  id: number;
  profileId: number;
  quizId: number;
  score: number;
  time: number;
  questionsDone: number[];
  nbRightAnswers: number;
  nbWrongAnswers: number;
  date: string;
  resume: Map<number, boolean>;

  constructor(quiz: Quiz, profile: Profile) {
    this.quizId = quiz.id;
    this.profileId = profile.id;
    this.score = 0;
    this.time = 0;
    this.questionsDone = [];
    this.nbRightAnswers = 0;
    this.nbWrongAnswers = 0;
    this.resume = new Map();
    this.initStats(quiz);
  }

  initStats(quiz: Quiz) {
    quiz.questions.forEach(element => {
      this.resume.set(element.id, false);
    });
  }



}
