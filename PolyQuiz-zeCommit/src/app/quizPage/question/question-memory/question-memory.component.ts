import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from 'src/app/models/question.models';
import {Answer} from 'src/app/models/answer.models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-memory',
  templateUrl: './question-memory.component.html',
  styleUrls: ['./question-memory.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  public wrongAnswers: Answer[] = [];
  public size: number;
  public trouble: string;


  @Output()
  public nextQ: EventEmitter<Answer> = new EventEmitter();

  @Input()
  question: Question;

  @Input()
  lastQuestion: boolean;

  ngOnInit() {
    this.setTrouble();
    this.setQuizSize();
  }

  setQuizSize() {
    if (this.router.url.startsWith('/vue')) {
      this.size = Number(this.route.snapshot.paramMap.get('size'));
    } else {
      this.size = 1;
    }
  }

  nextQuestion(answer: Answer) {
    this.nextQ.emit(answer);

    if (!answer.isCorrect) {
      this.wrongAnswers.push(answer);
    }
  }

  setTrouble() {
    if (this.router.url.startsWith('/memoire')) {
      this.trouble = 'Mémoire';
    }
    if (this.router.url.startsWith('/vue')) {
      this.trouble = 'Vue';
    }
    if (this.router.url.startsWith('/moteur')) {
      this.trouble = 'Moteur';
    }
  }
}
