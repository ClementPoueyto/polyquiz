import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog} from '@angular/material/dialog';

import {QuizPageMemoryComponent} from './quiz-page-memory.component';

describe('QuizPageMemoryComponent', () => {
  let component: QuizPageMemoryComponent;
  let fixture: ComponentFixture<QuizPageMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPageMemoryComponent ],
      providers:[MatDialog],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
