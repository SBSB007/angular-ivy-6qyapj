import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeService } from "../shared/employee.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employeelist.component.html"
})
export class EmployeeListComponent implements OnInit {
  listdata: MatTableDataSource<any>;
  displayedColumns = ["firstName"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public service: EmployeeService) {}
  ngOnInit() {
    this.service.GetEmployeeList().subscribe(list => {
      let empArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      (this.listdata = new MatTableDataSource(empArray)),
      (this.listdata.paginator = this.paginator);
    });
  }
}
