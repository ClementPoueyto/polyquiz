import {Component, OnInit} from '@angular/core';
import {QuizListService} from '../services/quizList.service';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public quizListService:QuizListService, public profileService:ProfileService) {
  }

  ngOnInit() {
  }





}
