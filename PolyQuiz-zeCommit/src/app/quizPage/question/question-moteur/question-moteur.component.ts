import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from 'src/app/models/question.models';
import {Answer} from 'src/app/models/answer.models';
import {ActivatedRoute, Router} from '@angular/router';
import {Trouble} from 'src/app/models/trouble.models';
import {MatDialog} from '@angular/material/dialog';
import {PopUpConfirmAnswerComponent} from 'src/app/pop-up/pop-up-confirm-answer/pop-up-confirm-answer.component';

@Component({
  selector: 'app-question-moteur',
  templateUrl: './question-moteur.component.html',
  styleUrls: ['./question-moteur.component.css']
})
export class QuestionMoteurComponent extends Trouble implements OnInit {

  public wrongAnswers: Answer[] = [];

  public clics: number=0;

  constructor(public router: Router, private route: ActivatedRoute, public dialog: MatDialog) {
    super(router);
  }

  @Output()
  public nextQ: EventEmitter<Answer> = new EventEmitter();

  @Input()
  question: Question;

  @Input()
  lastQuestion: boolean;

  @Input()
  size: number;

  @Output()
  public clic: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  getSize($event) {
    this.size = $event;
  }

  nextQuestion(answer: Answer) {
    this.nextQ.emit(answer);
  }

  addClick(){
    this.clics+=1;
  }




  openDialogZoom(answer: Answer, isText: boolean){
    this.clics-=1;
    const dialogRef = this.dialog.open(PopUpConfirmAnswerComponent, {
      height: '80%',
      width: '80%',
      data: { answer, isText }
    });

    dialogRef.afterClosed().subscribe(
      (res) => {
        this.clics+=res.clics;
        if(res.validate){
          this.nextQuestion(res.answer)
          this.clic.emit(this.clics);
          this.clics=0;

        }
    });
  }



}

