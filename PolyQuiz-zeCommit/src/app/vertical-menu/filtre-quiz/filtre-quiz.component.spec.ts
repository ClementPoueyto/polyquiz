import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiltreQuizComponent} from './filtre-quiz.component';

describe('FiltreQuizComponent', () => {
  let component: FiltreQuizComponent;
  let fixture: ComponentFixture<FiltreQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
