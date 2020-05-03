import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionMoteurComponent} from './question-moteur.component';

describe('QuestionMoteurComponent', () => {
  let component: QuestionMoteurComponent;
  let fixture: ComponentFixture<QuestionMoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
