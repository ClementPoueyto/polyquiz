import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionVueComponent} from './question-vue.component';

describe('QuestionVueComponent', () => {
  let component: QuestionVueComponent;
  let fixture: ComponentFixture<QuestionVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
