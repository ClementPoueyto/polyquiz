import {Handicap} from './handicap.models';
import {Router} from '@angular/router';

export abstract class Trouble {

    public trouble:Handicap;

    constructor(public router:Router){
        this.setTrouble()
    }

    setTrouble() {
        if (this.router.url.startsWith('/memoire')) {
          this.trouble = Handicap.Memoire;
        }
        if (this.router.url.startsWith('/vue')) {
          this.trouble = Handicap.Vue;
        }
        if (this.router.url.startsWith('/moteur')) {
          this.trouble = Handicap.Moteur;
        }
      }

}
