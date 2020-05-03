import {Component, Inject} from '@angular/core';
import {Theme} from '../../../models/theme.models';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThemeService} from '../../../services/theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  public themeToChange: Theme;
  public themeForm: FormGroup;
  public themeCreated$: Observable<Theme>;
  public loadImage: string;
  private image: string;

  constructor(private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder, public themeService: ThemeService,
              public dialogRef: MatDialogRef<AddThemeComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
      if (data.theme) {
        this.themeToChange = data.theme;
        this.loadImage = this.themeToChange.image;
        this.themeForm = this.formBuilder.group({
          name: [this.themeToChange.name, Validators.required],
        });
      } else {
        this.themeForm = this.formBuilder.group({
          name: ['', Validators.required],
        });
      }
    }

  addTheme(): void {
    const themeToCreate: Theme = this.themeForm.getRawValue() as Theme;
    if (this.image != null) {
      themeToCreate.image = this.image;
    }
    if (this.themeToChange) {
      themeToCreate.id = this.themeToChange.id;
      this.themeCreated$ = this.themeService.editTheme(themeToCreate);
    } else {
      this.themeCreated$ = this.themeService.addTheme(themeToCreate);
    }
    this.themeCreated$.subscribe((result) => {
      this.themeService.setThemesFromUrl();
      this.close();
    });
  }

  onNoClick(): void {
    this.close();
  }
  close(): void {
    this.dialogRef.close();
  }

  receiveImg(img: string) {
    this.image = img;
  }

}
