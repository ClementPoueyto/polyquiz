import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizPageSizeSelectionComponent} from './quiz-page-size-selection.component';

describe('QuizPageSizeSelectionComponent', () => {
  let component: QuizPageSizeSelectionComponent;
  let fixture: ComponentFixture<QuizPageSizeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPageSizeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageSizeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
