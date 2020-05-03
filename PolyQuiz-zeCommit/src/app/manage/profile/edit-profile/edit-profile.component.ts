import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Trouble} from 'src/app/models/trouble.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Profile} from 'src/app/models/profile.models';
import {ProfileService} from 'src/app/services/profile.service';
import {Handicap} from 'src/app/models/handicap.models';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent extends Trouble implements OnInit {

  public HANDICAP_LIST: Handicap[] = [Handicap.Memoire, Handicap.Vue, Handicap.Moteur];

  public profileForm: FormGroup;
  public profileCreate$: Observable<Profile>;
  public profile: Profile;
  public image: string;
  constructor(public router: Router, public formBuilder: FormBuilder, public profileService: ProfileService, public route: ActivatedRoute) {
    super(router);
    let id: number;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('profileId'));
      this.profileService.profiles$.subscribe((res) => {
        const profile: Profile = res.find((profile$) => profile$.id === id);
        if (profile) {
          this.profile = profile;
          this.image = profile.image;
          this.profileForm = this.formBuilder.group({
            firstName: [profile.firstName, Validators.required],
            lastName: [profile.lastName, Validators.required],
            birthDate: [profile.birthDate.toString()!=''?formatDate(profile.birthDate.toString(), 'yyyy-MM-dd', 'en'):''],
            gender: [profile.gender.toString(), Validators.required],
            trouble: [this.trouble.toString(), Validators.required],
          });
        }
      });
    });
  }
  invalidFirstName() {
  	return (this.profileForm.controls.firstName.errors != null);
  }

  invalidLastName() {
  	return (this.profileForm.controls.lastName.errors != null);
  }

  ngOnInit() {
  }

  validProfile() {
    const profileToChange = this.profileForm.getRawValue();
    profileToChange.id = this.profile.id;
    if (this.image != null) {
      profileToChange.image = this.image;
    } else {
      profileToChange.image = this.profile.image;
    }
    this.profileService.editProfile(profileToChange);
    this.router.navigate(['../..'], { relativeTo: this.route });

  }

  receiveImg(img: string) {
    this.image = img;
  }

}
