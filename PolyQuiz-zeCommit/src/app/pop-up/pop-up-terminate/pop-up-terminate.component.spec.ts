import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTerminateComponent } from './pop-up-terminate.component';

describe('PopUpTerminateComponent', () => {
  let component: PopUpTerminateComponent;
  let fixture: ComponentFixture<PopUpTerminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpTerminateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTerminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
