import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../shared/employee.service";
import { NotificationService } from "../shared/notification.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: [] 
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService,public popup:NotificationService) {}

  ngOnInit() {this.service.GetEmployeeList()}
  ClearForm() {
    this.service.form.reset();
    this.service.InitializeComponent();
  }
  get f() {
    return this.service.form.controls;
  }
  onSubmit() {
    if (this.service.form.valid) {
      this.service.InsertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.InitializeComponent();
      this.popup.SuccessPopUP("Saved Successfully!!")
    }
  }
}
