import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Profile} from '../../../models/profile.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  profile: Profile;

  @Output()
  profileSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  profileDeleted: EventEmitter<Profile> = new EventEmitter<Profile>();

  ngOnInit() {
  }


}
