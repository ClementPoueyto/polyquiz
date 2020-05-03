import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  answer: boolean;
  completed: boolean;
}

@Component({
  selector: 'app-pop-up-answer-component',
  templateUrl: './pop-up-answer.component.html',
  styleUrls: ['./pop-up-answer.component.css']
})
export class PopUpAnswerComponent {

  currentAnswer: boolean;
  completed: boolean;

  constructor(private router: Router, private route: ActivatedRoute,
              public dialogRef: MatDialogRef<PopUpAnswerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.currentAnswer = data.answer;
    this.completed = data.completed;
    dialogRef.disableClose = true;
  }


  close(): void {
    this.dialogRef.close();
  }

}

