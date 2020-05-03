import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopUpConfirmAnswerComponent} from './pop-up-confirm-answer.component';

describe('PopUpConfirmAnswerComponent', () => {
  let component: PopUpConfirmAnswerComponent;
  let fixture: ComponentFixture<PopUpConfirmAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpConfirmAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpConfirmAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
