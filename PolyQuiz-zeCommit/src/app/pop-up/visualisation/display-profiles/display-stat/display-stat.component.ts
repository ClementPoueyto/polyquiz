import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-stat',
  templateUrl: './display-stat.component.html',
  styleUrls: ['./display-stat.component.css']
})
export class DisplayStatComponent implements OnInit {


  @Input() stat: any;
  @Input() display: boolean;
  constructor() { }

  ngOnInit() {
  }

}
