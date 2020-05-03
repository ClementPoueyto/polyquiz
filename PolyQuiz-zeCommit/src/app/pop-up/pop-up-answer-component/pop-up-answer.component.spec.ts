import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopUpAnswerComponent} from './pop-up-answer.component';

describe('PopUpAnswerComponentComponent', () => {
  let component: PopUpAnswerComponent;
  let fixture: ComponentFixture<PopUpAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
