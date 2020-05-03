import {Quiz} from './quiz.models';
import {Profile} from './profile.models';
import {Stat} from './stat.models';

export class StatMoteur extends Stat {

  missclics: number;

  constructor(quizz: Quiz, profile: Profile) {
    super(quizz,profile);
    this.missclics=0;
  }



}
