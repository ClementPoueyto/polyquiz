import {Component, Inject, OnInit} from '@angular/core';
import {Answer} from 'src/app/models/answer.models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  answer?: Answer;
  isText?: boolean;
  img?: string;
}

@Component({
  selector: 'app-pop-up-confirm-answer',
  templateUrl: './pop-up-confirm-answer.component.html',
  styleUrls: ['./pop-up-confirm-answer.component.css']
})
export class PopUpConfirmAnswerComponent implements OnInit {
  public answer: Answer;
  public img: string;
  public isText: boolean;
  public validate: boolean;
  public clics:number=0;

  constructor(public dialogRef: MatDialogRef<PopUpConfirmAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    if (this.data.answer) {
      this.answer = this.data.answer;
      if (!data.isText) {
        this.img = this.answer.image;
      }
      this.isText = this.data.isText;
    }
    if (this.data.img) {
      this.img = this.data.img;
      this.isText = false;
    }

    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  closeForAnswer() {
    this.dialogRef.close({ validate: this.validate, answer: this.answer, clics:this.clics>0?this.clics-1:0 });
  }

  addClick(){
    this.clics+=1;
  }


}
