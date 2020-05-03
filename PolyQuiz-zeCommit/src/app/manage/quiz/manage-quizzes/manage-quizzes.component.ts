import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from 'src/app/models/quiz.models';
import {Trouble} from 'src/app/models/trouble.models';
import {PopUpDeleteComponent} from 'src/app/pop-up/pop-up-delete/pop-up-delete.component';
import {QuizListService} from 'src/app/services/quizList.service';
import {DisplayQuizComponent} from 'src/app/pop-up/visualisation/display-quiz/display-quiz.component';

@Component({
  selector: 'app-manage-quizzes',
  templateUrl: './manage-quizzes.component.html',
  styleUrls: ['./manage-quizzes.component.css']
})

export class ManageQuizzesComponent extends Trouble implements OnInit {

  public filterTheme:number;
  public filter:string;
  public quizList: Quiz[];
  public noFilterQuizList:Quiz[];

  constructor(public quizServ: QuizListService, public router: Router, public route: ActivatedRoute, public dialog: MatDialog) {
    super(router);
    this.quizServ.quizzes$.subscribe((quiz) => {
      this.quizList = quiz.filter(quiz$ => quiz$.trouble === this.trouble);
      this.noFilterQuizList=this.quizList;
    });
  }

  ngOnInit() {
  }

  openDialog(quiz: Quiz) {
    const dialogRef = this.dialog.open(PopUpDeleteComponent, {
      data: {
        quiz,
      }
    });
    
  }

  openDialogDisplay(quiz: Quiz) {
    const dialogRef = this.dialog.open(DisplayQuizComponent, {
      height: '80%',
      width: '80%',
      data: {
        quiz,
      }
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res && res.route){
        this.router.navigate([res.route],{ relativeTo: this.route })
      }
    })
  }

  applyfilter(): void {
    if(this.filter){
      this.quizList=this.noFilterQuizList.filter(
        quiz => quiz.name.toLowerCase().match(this.filter)||quiz.theme.name.toLowerCase().match(this.filter))
    }
    else if(this.filterTheme!=0&&this.filterTheme){
      this.quizList=this.noFilterQuizList.filter(
        quiz => quiz.theme.id==this.filterTheme)
    }
    else{
        this.quizList=this.noFilterQuizList
    }
  }

  applyFilterTheme($event){
    this.filterTheme=$event
    this.applyfilter()
  }

  applyFilterName($event){
    this.filter=$event
    this.applyfilter()

  }
}
