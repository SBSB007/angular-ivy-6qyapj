import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { FirebaseApp } from "@angular/fire";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  employeelist: AngularFireList<any>;

  constructor(private firebaseDB: AngularFireDatabase) {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    mobile: new FormControl("", [
      Validators.required,
      Validators.maxLength(10)
    ]),
    city: new FormControl("", Validators.required),
    gender: new FormControl(1),
    department: new FormControl(0),
    hiredate: new FormControl("", Validators.required),
    ispermanent: new FormControl(false)
  });

  InitializeComponent() {
    this.form.setValue({
      $key: null,
      firstName: "",
      email: "",
      mobile: "",
      city: "",
      gender: 1,
      department: 0,
      hiredate: "",
      ispermanent: false
    });
  }

  GetEmployeeList() {
    this.employeelist = this.firebaseDB.list("employees");
    return this.employeelist.snapshotChanges();
  }
  InsertEmployee(emp) {
    this.employeelist.push({
      firstName: emp.firstName,
      email: emp.email,
      mobile: emp.mobile,
      city: emp.city,
      gender: emp.gender,
      department: emp.department,
      hiredate: emp.hiredate,
      ispermanent: emp.ispermanent
    });
  }

   UpdateEmployee(emp) {
    this.employeelist.update(emp.$key,
    {
      firstName: emp.firstName,
      email: emp.email,
      mobile: emp.mobile,
      city: emp.city,
      gender: emp.gender,
      department: emp.department,
      hiredate: emp.hiredate,
      ispermanent: emp.ispermanent
    });
  }

  DeleteEmployee($key:string){
    this.employeelist.remove($key);
  }
}
