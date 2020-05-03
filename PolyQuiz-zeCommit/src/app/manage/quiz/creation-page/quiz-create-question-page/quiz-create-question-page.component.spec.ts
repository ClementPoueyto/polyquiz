import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizCreateQuestionPageComponent} from './quiz-create-question-page.component';

describe('QuizCreateQuestionPageComponent', () => {
  let component: QuizCreateQuestionPageComponent;
  let fixture: ComponentFixture<QuizCreateQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCreateQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCreateQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
