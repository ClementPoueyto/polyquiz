import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

export interface DialogData {
  path: 'accueil' | 'retour1' | 'retour2';
  url
}

@Component({
  selector: 'app-pop-up-warning',
  templateUrl: './pop-up-warning.component.html',
  styleUrls: ['./pop-up-warning.component.css']
})
export class PopUpWarningComponent {

  path:string;
  currentUrl;

  constructor(private router: Router, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<PopUpWarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.currentUrl=data.url;
      switch(data.path){
        case 'accueil':
          this.path="";
          break;
        case 'retour1':
          this.path=".."
          break;
        case 'retour2':
          this.path='../../'
          break;
      }
    }

  action():void{
    this.close();
    if(this.data.path=="accueil"){
      this.goHome();
    }
    else{
      this.goBack();
    }
  }

  goHome():void{
    this.router.navigate([""])
  }

  goBack():void{
    this.router.navigate(['../'], { relativeTo: this.currentUrl })
  }

  close():void{
    this.dialogRef.close();

  }
  onNoClick(): void {
    this.close();
  }

}
