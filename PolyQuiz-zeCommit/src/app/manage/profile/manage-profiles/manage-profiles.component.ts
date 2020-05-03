import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from 'src/app/services/profile.service';
import {Trouble} from 'src/app/models/trouble.models';
import {Profile} from 'src/app/models/profile.models';
import {MatDialog} from '@angular/material/dialog';
import {DisplayWindowComponent} from 'src/app/pop-up/visualisation/display-profiles/display-window/display-window.component';
import {PopUpDeleteComponent} from 'src/app/pop-up/pop-up-delete/pop-up-delete.component';

@Component({
  selector: 'app-manage-profiles',
  templateUrl: './manage-profiles.component.html',
  styleUrls: ['./manage-profiles.component.css']
})
export class ManageProfilesComponent extends Trouble implements OnInit {
  public filter:string;
  public profileList:Profile[];
  public noFilterProfileList:Profile[];

  constructor(public router:Router,public profileService:ProfileService,public route:ActivatedRoute,public dialog: MatDialog) {
    super(router)
    this.profileService.profiles$.subscribe((prof) => {
      this.profileList = prof.filter(profile => profile.trouble === this.trouble);
      this.noFilterProfileList=this.profileList
    });
  }

  ngOnInit() {
  }

  openDialog(profile:Profile) {
    const dialogRef = this.dialog.open(DisplayWindowComponent, {
      height: '80%',
      width: '80%',
      data: {
        profile:profile,
      }
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res && res.route){
        this.router.navigate([res.route],{ relativeTo: this.route })
      }
    })
  }

  onKey(value: string) {
    this.filter=value.toLowerCase();
    if(this.filter){
      this.profileList=this.noFilterProfileList.filter(
        profile => profile.firstName.toLowerCase().match(this.filter)||profile.lastName.toLowerCase().match(this.filter))
    }
    else{
        this.profileList=this.noFilterProfileList
    }
  }

}
