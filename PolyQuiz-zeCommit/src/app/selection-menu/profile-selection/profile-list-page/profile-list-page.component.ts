import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Trouble} from 'src/app/models/trouble.models';


@Component({
  selector: 'app-profile-list-page',
  templateUrl: './profile-list-page.component.html',
  styleUrls: ['./profile-list-page.component.css']
})
export class ProfileListPageComponent extends Trouble implements OnInit {
  public value:string;

  constructor(public router: Router) {
    super(router)
  }

  ngOnInit() {
  }

  onKey(value: string) {
    this.value=value
  }

}
