import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarQuestionComponent} from './navbar-question.component';

describe('NavbarQuestionComponent', () => {
  let component: NavbarQuestionComponent;
  let fixture: ComponentFixture<NavbarQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
