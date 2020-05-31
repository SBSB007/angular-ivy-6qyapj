import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { FirebaseApp } from "@angular/fire";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationService {

  config:MatSnackBarConfig<any> ={
    duration:1000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }

  constructor(private _snackBar: MatSnackBar) {}

  SuccessPopUP(message: string) {
    this._snackBar.open(message,"",this.config);
  }
}