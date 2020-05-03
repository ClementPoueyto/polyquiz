import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-page-size-selection',
  templateUrl: './quiz-page-size-selection.component.html',
  styleUrls: ['./quiz-page-size-selection.component.css']
})
export class QuizPageSizeSelectionComponent implements OnInit {

  @Output()
  public size: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setSize(n: number) {
    this.size.emit(n);
  }

}


