import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuizListService} from 'src/app/services/quizList.service';
import {Trouble} from 'src/app/models/trouble.models';

@Component({
  selector: 'app-quiz-create-page',
  templateUrl: './quiz-create-page.component.html',
  styleUrls: ['./quiz-create-page.component.css']
})
export class QuizCreatePageComponent extends Trouble implements OnInit {

  public quizId: number;
  public questionId: number;
  constructor(public router: Router, public quizListService: QuizListService) {
    super(router);
  }

  ngOnInit() {
  }

}
