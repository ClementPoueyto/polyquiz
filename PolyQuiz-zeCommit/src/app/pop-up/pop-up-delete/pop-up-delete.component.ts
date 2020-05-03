import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PopUpWarningComponent} from '../pop-up-warning/pop-up-warning.component';
import {Quiz} from '../../models/quiz.models';
import {QuizListService} from '../../services/quizList.service';
import {Profile} from '../../models/profile.models';
import {ProfileService} from '../../services/profile.service';
import {Theme} from 'src/app/models/theme.models';
import {ThemeService} from 'src/app/services/theme.service';

@Component({
  selector: 'app-pop-up-delete',
  templateUrl: './pop-up-delete.component.html',
  styleUrls: ['./pop-up-delete.component.css']
})
export class PopUpDeleteComponent implements OnInit {

  public quizToDelete:Quiz;
  public profileToDelete:Profile;
  public themeToDelete:Theme;

  constructor(public profileService:ProfileService, public quizService:QuizListService,public themeService : ThemeService,
    public dialogRef: MatDialogRef<PopUpWarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      if(data.quiz){
        this.quizToDelete=data.quiz
      }
      if(data.profile){
        this.profileToDelete=data.profile
      }
      if(data.theme){
        this.themeToDelete=data.theme
      }
    }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close();

  }
  onNoClick(): void {
    this.close();
  }

  action(){
    if(this.quizToDelete){
      this.quizService.deleteQuiz(this.quizToDelete);
    }
    if(this.profileToDelete){
      this.profileService.deleteProfile(this.profileToDelete.id);
    }
    if(this.themeToDelete){
      this.themeService.deleteTheme((this.themeToDelete.id).toString()).subscribe(() => {
        this.themeService.setThemesFromUrl();
        this.quizService.setQuizzesFromUrl();
      });
    }
    this.close()
  }
}
