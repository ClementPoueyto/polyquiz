import {Quiz} from './quiz.models';
import {Profile} from './profile.models';
import {Stat} from './stat.models';

export class StatVue extends Stat {

  constructor(quizz: Quiz, profile: Profile) {
    super(quizz, profile);
  }

}
