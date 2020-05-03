import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {DisplayQuestionComponent} from '../../display-question/display-question.component';
import {Handicap} from '../../../../models/handicap.models';
import {Profile} from '../../../../models/profile.models';
import {Quiz} from 'src/app/models/quiz.models';
import {QuizListService} from 'src/app/services/quizList.service';
import {ProfileService} from 'src/app/services/profile.service';
import { PopUpDeleteComponent } from 'src/app/pop-up/pop-up-delete/pop-up-delete.component';

@Component({
  selector: 'app-display-window',
  templateUrl: './display-window.component.html',
  styleUrls: ['./display-window.component.css']
})
export class DisplayWindowComponent implements OnInit {

  stat: any[];
  quizzesDone: Quiz[];
  trouble: Handicap;
  profile: Profile;
  public selectedStat: any;
  constructor(private router: Router, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DisplayQuestionComponent>, public profileService: ProfileService, public quizService: QuizListService,
    @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog) {
      this.trouble=data.profile.trouble
      this.profile=data.profile

      this.profileService.getProfileStats(this.profile);
      this.profileService.selectedStats$.subscribe((res) => {
        if (res) {
          this.stat = res;

        }
      });
    }

  ngOnInit() {
  }

  openDialogDelete(profile:Profile) {
    const dialogRef = this.dialog.open(PopUpDeleteComponent, {
      data: {
        profile:profile,
      }
    });
    dialogRef.afterClosed().subscribe(() => this.dialogRef.close());
  }

  close(): void {
    this.dialogRef.close();

  }
  onNoClick(): void {
    this.close();
  }

  modify(){
    this.dialogRef.close({ route: 'edit/'+this.profile.id })
  }

}
