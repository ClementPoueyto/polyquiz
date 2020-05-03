import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {Profile} from '../../../models/profile.models';
import {Router} from '@angular/router';
import {Trouble} from 'src/app/models/trouble.models';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent extends Trouble implements OnChanges {

  public unfilterProfileList:Profile[]=[];
  public profileList: Profile[] = [];

  @Input() filter;

  constructor(public profileService: ProfileService, public router: Router) {
    super(router)
    this.profileService.profiles$.subscribe((profiles) => {
      this.profileList = profiles.filter(profile => profile.trouble === this.trouble);
      this.unfilterProfileList=this.profileList;
    });

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.filter){
      this.filter=this.filter.toLowerCase()
      this.profileList=this.unfilterProfileList.filter(
        profile => profile.firstName.toLowerCase().match(this.filter)||profile.lastName.toLowerCase().match(this.filter))
    }
    else{
        this.profileList=this.unfilterProfileList
    }
  }



}
