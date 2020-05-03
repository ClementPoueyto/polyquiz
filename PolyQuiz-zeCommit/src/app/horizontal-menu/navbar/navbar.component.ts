import {Component, Input, OnInit} from '@angular/core';
import {Handicap} from '../../models/handicap.models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input()
  title:string;
  @Input()
  Back:boolean;
  @Input()
  Home:boolean;
  @Input()
  trouble:Handicap;

  @Input()
  path:string;

  displayHome:boolean;
  displayBack:boolean;
  backPath:string;

  currentUrl;


  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentUrl=this.route
  }

  ngOnInit() {
    this.backPath="../";
    this.displayBack=true;
    this.displayHome=true;
    if(this.Home!=null){
      this.displayHome=this.Home;}
    if(this.Back!=null){
      this.displayBack=this.Back;
    }
    if(this.path!=null){
      this.backPath=this.path;
    }
  }



  goBack():void{
    this.router.navigate([this.backPath], { relativeTo: this.currentUrl })
  }

}
