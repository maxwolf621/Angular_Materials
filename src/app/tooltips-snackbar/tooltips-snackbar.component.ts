import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tooltips-snackbar',
  templateUrl: './tooltips-snackbar.component.html',
  styleUrls: ['./tooltips-snackbar.component.css'],
})
export class TooltipsSnackbarComponent implements OnInit {
  title!: string;
  constructor(private _snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ngOnInit() {}

  // close snackBar
  closeSnackBar() {
    this._snackBar.dismiss();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
