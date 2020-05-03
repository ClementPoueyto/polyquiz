import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../models/profile.models';
import {PopUpWarningComponent} from '../../pop-up/pop-up-warning/pop-up-warning.component';
import {MatDialog} from '@angular/material/dialog';
import {Quiz} from '../../models/quiz.models';

@Component({
  selector: 'app-navbar-question',
  templateUrl: './navbar-question.component.html',
  styleUrls: ['./navbar-question.component.css']
})
export class NavbarQuestionComponent implements OnInit {

  @Input()
  quiz:Quiz;
  @Input()
  profile:Profile;



  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit() {

  }

  openDialog(path: string) {
    this.dialog.open(PopUpWarningComponent, {
      data: {
        path,
        url: this.route
      }
    });
  }

}
