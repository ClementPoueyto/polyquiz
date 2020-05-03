import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizCreateEntranceComponent} from './quiz-create-entrance.component';

describe('QuizCreateEntranceComponent', () => {
  let component: QuizCreateEntranceComponent;
  let fixture: ComponentFixture<QuizCreateEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCreateEntranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCreateEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
