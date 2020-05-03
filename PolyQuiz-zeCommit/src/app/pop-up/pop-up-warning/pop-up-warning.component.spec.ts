import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogRef} from '@angular/material/dialog';

import {PopUpWarningComponent} from './pop-up-warning.component';

describe('PopUpWarningComponent', () => {
  let component: PopUpWarningComponent;
  let fixture: ComponentFixture<PopUpWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpWarningComponent ],
      providers: [ MatDialogRef ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
