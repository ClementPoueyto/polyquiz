import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from 'src/app/models/question.models';
import {Answer} from 'src/app/models/answer.models';
import {ActivatedRoute, Router} from '@angular/router';
import {Trouble} from 'src/app/models/trouble.models';
import {MatDialog} from '@angular/material/dialog';
import {PopUpZoomComponent} from '../../../pop-up/pop-up-zoom/pop-up-zoom.component';

@Component({
  selector: 'app-question-vue',
  templateUrl: './question-vue.component.html',
  styleUrls: ['./question-vue.component.css']
})
export class QuestionVueComponent extends Trouble implements OnInit {

  public wrongAnswers: Answer[] = [];
  @Input()
  public zoom: boolean;

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

  ngOnInit() {
  }

  getSize($event) {
    this.size = $event;
  }

  nextQuestion(answer: Answer) {
    this.nextQ.emit(answer);
  }


  openDialogZoom(answer: Answer, isText: boolean){
    const dialogRef = this.dialog.open(PopUpZoomComponent, {
      height: '80%',
      width: '80%',
      data: { answer, isText }
    });

    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res.validate){
          this.nextQuestion(res.answer)
        }
    });
  }

  openDialogImg(img: string) {
    this.dialog.open(PopUpZoomComponent, {
      height: '80%',
      width: '80%',
      data: { img }
    });
  }

}
