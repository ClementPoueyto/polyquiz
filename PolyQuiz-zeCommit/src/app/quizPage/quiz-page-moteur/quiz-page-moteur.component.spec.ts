import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizPageMoteurComponent} from './quiz-page-moteur.component';

describe('QuizPageMoteurComponent', () => {
  let component: QuizPageMoteurComponent;
  let fixture: ComponentFixture<QuizPageMoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPageMoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
