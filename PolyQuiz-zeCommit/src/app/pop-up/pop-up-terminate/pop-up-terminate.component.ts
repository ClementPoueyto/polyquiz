import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pop-up-terminate',
  templateUrl: './pop-up-terminate.component.html',
  styleUrls: ['./pop-up-terminate.component.css']
})
export class PopUpTerminateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUpTerminateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {

  }

  action(): void {
    this.dialogRef.close({ terminate: true });
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close({ terminate: false });
  }
  onNoClick(): void {
    this.close();
  }

}
