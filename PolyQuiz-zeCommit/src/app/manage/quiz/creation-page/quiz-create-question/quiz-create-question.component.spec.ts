import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizCreateQuestionComponent} from './quiz-create-question.component';

describe('QuizCreateQuestionComponent', () => {
  let component: QuizCreateQuestionComponent;
  let fixture: ComponentFixture<QuizCreateQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCreateQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCreateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
