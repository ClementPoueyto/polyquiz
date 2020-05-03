import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileCreatePageComponent} from './profile-create-page.component';

describe('ProfileCreatePageComponent', () => {
  let component: ProfileCreatePageComponent;
  let fixture: ComponentFixture<ProfileCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
