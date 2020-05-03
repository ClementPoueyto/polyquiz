import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from 'src/app/models/quiz.models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();




}
