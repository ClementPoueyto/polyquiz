import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {Theme} from '../../models/theme.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-filtre-quiz',
  templateUrl: './filtre-quiz.component.html',
  styleUrls: ['./filtre-quiz.component.css']
})
export class FiltreQuizComponent implements OnInit {
  @Output() public filterName = new EventEmitter<string>();
  @Output() public filterTheme = new EventEmitter<number>();

  public quizFilterForm: FormGroup;

  public themes:Theme[];
    constructor(public themeService:ThemeService, public formBuilder: FormBuilder) {
      this.quizFilterForm= this.formBuilder.group({
        themeId: ['', Validators.required],
      });
      this.themeService.themes$.subscribe((res)=> {
        if(res){
          this.themes=res;
      }
    });
  }


  ngOnInit() {
  }

  onKey(value: string) {
    this.filterName.emit(value.toLowerCase());
  }
  onItemChange(){
    this.filterTheme.emit(this.quizFilterForm.value.themeId)
  }

}
