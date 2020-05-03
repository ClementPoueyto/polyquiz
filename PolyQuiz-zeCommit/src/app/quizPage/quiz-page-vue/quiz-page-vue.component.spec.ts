import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizPageVueComponent} from './quiz-page-vue.component';

describe('QuizPageVueComponent', () => {
  let component: QuizPageVueComponent;
  let fixture: ComponentFixture<QuizPageVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPageVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
