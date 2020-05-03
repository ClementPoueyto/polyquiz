import {Quiz} from './quiz.models';
import {Profile} from './profile.models';
import {Stat} from './stat.models';

export class StatMemory extends Stat {

  trial: Map<number, number>;


  constructor(quizz: Quiz, profile: Profile) {
    super(quizz, profile);
    this.trial = new Map();
    this.initStatsMemory(quizz);
  }

  initStatsMemory(quiz: Quiz) {
    quiz.questions.forEach(element => {
      this.trial.set(element.id, 0);
    });
  }


}
