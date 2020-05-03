import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../models/quiz.models';
import {QuizListService} from '../../services/quizList.service';
import {ProfileService} from '../../services/profile.service';

import {Question} from 'src/app/models/question.models';
import {StatMemory} from 'src/app/models/stat-memory.models';
import {Answer} from 'src/app/models/answer.models';
import {Profile} from 'src/app/models/profile.models';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {DatePipe} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {PopUpAnswerComponent} from '../../pop-up/pop-up-answer-component/pop-up-answer.component';
import { PopUpTerminateComponent } from 'src/app/pop-up/pop-up-terminate/pop-up-terminate.component';


@Component({
  selector: 'app-quiz-page-memory',
  templateUrl: './quiz-page-memory.component.html',
  styleUrls: ['./quiz-page-memory.component.css']
})
export class QuizPageMemoryComponent implements OnInit {

  public profile: Profile;
  public quiz: Quiz;
  public questionList: Question[];
  public question: Question;
  public index = 0;

  public quizDone: boolean;
  public stats: StatMemory;
  private timer: number;


  constructor(public profileService: ProfileService, public quizService: QuizListService,
              private route: ActivatedRoute, public dialog: MatDialog) {
    const combinedObject = combineLatest(this.profileService.profiles$, this.quizService.quizzes$);
    combinedObject.subscribe(value => {
      if (value[0] && value[1]) {
        this.load(value[1], value[0]);
        this.timer = Date.now(); // debut chrono
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
        this.question = quiz.questions[this.index];
      }
      const profile = profiles.find((prof) => prof.id === idProfile);
      if (profile) {
        this.profile = profile;
      }
      if (profile && quiz) {
        this.stats = new StatMemory(this.quiz, this.profile); // creation objet stat
      }
    });
  }


  ngOnInit() {
  }




  isCompleted(): boolean {
    if (this.stats.questionsDone.length === this.questionList.length) {
      return true;
    }
    return false;
  }

  terminateQuiz() {
    this.stats.time = Date.now() - this.timer; // temps mis pour completer le quiz
    this.quizDone = true;
    const pipe = new DatePipe('en-US');
    const currentDate = Date.now();
    this.stats.date = pipe.transform(currentDate, 'short');
    this.profileService.addStat(this.stats, this.profile.trouble);
    this.calculScore();
  }

  UpdateMapStats(asw: Answer): void {
    if (this.stats.trial.get(asw.questionId) == null) {
      this.stats.trial.set(asw.questionId, 0);
    }
    this.stats.trial.set(asw.questionId, this.stats.trial.get(asw.questionId) + 1);
    if(asw.isCorrect||this.stats.trial.get(asw.questionId)>2){
      this.stats.resume.set(asw.questionId, asw.isCorrect);
      if(asw.isCorrect){
        this.stats.nbRightAnswers+=1
      }
      else{
        this.stats.nbWrongAnswers+=1;
      }
    }

  }

  receiveQ($event) {
    this.UpdateMapStats($event);
    if($event.isCorrect||this.stats.trial.get($event.questionId)>2){
      if (!this.stats.questionsDone.includes($event.questionId)) {
        this.stats.questionsDone.push($event.questionId);
      } // incrémente de 1 le nombre de question fini
      this.openDialog($event.isCorrect,this.isCompleted());
    }

  }

  searchNextQuestion() {
    for (let i = 0; i < this.questionList.length; i++) {
      if (!this.stats.questionsDone.includes(this.questionList[i].id)) {
        this.index = i;
        break;
      }
    }
  }


  skipQ(n) { // saute n question(s)
    this.index = n;
  }

  calculScore(){
    this.stats.score=Math.round((this.questionList.length/(this.stats.time/10000))*this.stats.nbRightAnswers*100)
  }

  openDialog(answer: boolean, completed: boolean) {
    const dialogRef = this.dialog.open(PopUpAnswerComponent, {
      data: { answer, completed },
      width:"50%",
      height:"50%",
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (completed) {
          this.terminateQuiz();
        }
        else {
          this.searchNextQuestion();
        }
      }
    );
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
          }
      }
    );
  }
}

