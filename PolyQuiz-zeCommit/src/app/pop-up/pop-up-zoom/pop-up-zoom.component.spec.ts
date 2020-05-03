import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopUpZoomComponent} from './pop-up-zoom.component';

describe('PopUpImgComponent', () => {
  let component: PopUpZoomComponent;
  let fixture: ComponentFixture<PopUpZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
