import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Question} from '../../../models/question.models';
import {Handicap} from '../../../models/handicap.models';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent{

  question:Question;
  trouble:Handicap;
  constructor(private router: Router, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DisplayQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.question=data.quest;
      this.trouble=data.trouble;
    }





  goHome():void{
    this.router.navigate([""])
  }


  close():void{
    this.dialogRef.close();

  }
  onNoClick(): void {
    this.close();
  }

}
