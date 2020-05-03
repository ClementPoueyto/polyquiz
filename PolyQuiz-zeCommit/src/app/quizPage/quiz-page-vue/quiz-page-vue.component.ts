import {Component, OnInit} from '@angular/core';
import {Profile} from '../../models/profile.models';
import {Quiz} from '../../models/quiz.models';
import {Question} from '../../models/question.models';
import {ProfileService} from '../../services/profile.service';
import {QuizListService} from '../../services/quizList.service';
import {ActivatedRoute} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import {combineLatest} from 'rxjs';
import {StatVue} from 'src/app/models/stat-vue.models';
import {DatePipe} from '@angular/common';
import {Answer} from '../../models/answer.models';
import {PopUpAnswerComponent} from '../../pop-up/pop-up-answer-component/pop-up-answer.component';
import { PopUpTerminateComponent } from 'src/app/pop-up/pop-up-terminate/pop-up-terminate.component';


@Component({
  selector: 'app-quiz-page-vue',
  templateUrl: './quiz-page-vue.component.html',
  styleUrls: ['./quiz-page-vue.component.css']
})
export class QuizPageVueComponent implements OnInit {

  public profile: Profile;
  public quiz: Quiz;
  public questionList: Question[];
  public question: Question;
  public startQuiz: boolean;
  public quizDone: boolean;
  public stats: StatVue;
  public size: number;
  private timer: number;
  public indexGlobal: number;
  public zoom: boolean = true;


  constructor(public profileService: ProfileService, public quizService: QuizListService,
    private route: ActivatedRoute, public dialog: MatDialog) {
    this.startQuiz = false;
    this.indexGlobal = 0;
    const combinedObject = combineLatest(this.profileService.profiles$, this.quizService.quizzes$);
    combinedObject.subscribe(value => {
      if (value[0] && value[1]) {
        this.load(value[1], value[0]);
        this.timer = Date.now();
      }
    });

  }

  load(quizzes: Quiz[], profiles: Profile[]) {
    this.route.paramMap.subscribe(params => {
      const idQuiz = Number(params.get('idQuiz'));
      const idProfile = Number(params.get('idProfile'));
      const quiz = quizzes.find((quiz$) => quiz$.id === idQuiz);
      if (quiz) {
        this.quiz = quiz;
        this.questionList = quiz.questions;
        this.question = quiz.questions[this.indexGlobal];
      }
      const profile = profiles.find((prof) => prof.id === idProfile);
      if (profile) {
        this.profile = profile;
      }
      if (profile && quiz) {
        this.stats = new StatVue(this.quiz, this.profile); // creation objet stat
      }
    });
  }

  getSize($event) {
    this.size = $event;
    this.startQuiz = true;
  }

  ngOnInit() {
  }

  isCompleted(): boolean {
    return this.stats.questionsDone.length === this.questionList.length;
  }

  terminateQuiz() {
    this.stats.time = Date.now() - this.timer;
    const pipe = new DatePipe('en-US');
    const currentDate = Date.now();
    this.stats.date = pipe.transform(currentDate, 'short');
    this.calculScore();
    this.profileService.addStat(this.stats, this.profile.trouble);
  }

  UpdateMapStats(asw: Answer): void {
    if (this.stats.resume.get(asw.questionId) == null) {
      this.stats.resume.set(asw.questionId, false);
    }
    if (asw.isCorrect) {
      this.stats.resume.set(asw.questionId, true);
      this.stats.nbRightAnswers += 1;
    } else {
      this.stats.nbWrongAnswers += 1;
    }

  }



  receiveQ($event) {
    this.UpdateMapStats($event);
    this.stats.questionsDone.push($event.questionId) // incrémente de 1 le nombre de questions finies
    if ($event.isCorrect) {
      if (!this.stats.questionsDone.includes($event.questionId)) {
        this.stats.questionsDone.push($event.questionId);
      } // incrémente de 1 le nombre de question fini
      this.openDialogAns(true, this.isCompleted());
    }
    if (!$event.isCorrect) {
      if (!this.stats.questionsDone.includes($event.questionId)) {
        this.stats.questionsDone.push($event.questionId);
      } // incrémente de 1 le nombre de question fini
      this.openDialogAns(false, this.isCompleted());

    }
  }


  calculScore() {
    this.stats.score = Math.round((this.questionList.length / (this.stats.time / 10000)) * this.stats.nbRightAnswers * 100);
  }

  openDialogAns(answer: boolean, completed: boolean) {
    const dialogRef = this.dialog.open(PopUpAnswerComponent, {
      data: { answer, completed },
      width:"50%",
      height:"50%",
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (completed) {
          this.terminateQuiz();
          this.quizDone = true;
        }
        else {
          this.indexGlobal++;
        }
      }
    );
  }

  changeZoom(){
    this.zoom = !this.zoom;
  }

  openDialogTerminate() {
    const dialogRef = this.dialog.open(PopUpTerminateComponent, {
      width:"50%",
      height:"50%",
    });

    dialogRef.afterClosed().subscribe(
      data => {
          if(data.terminate){
            this.terminateQuiz();
            this.quizDone = true;
          }
      }
    );
  }
}
