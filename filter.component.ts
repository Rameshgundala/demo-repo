import { Component, OnInit, ViewChild } from '@angular/core';
import { employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  employee!: MatTableDataSource<employee>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataloading:boolean=true;
  employeestatusloading="loading...."
  iserror=false
  iscomplete=false
  columnsToDisplay: string[] = ['id', 'employeename', 'email', 'contactnumber','city','department'];
  fg!:FormGroup
  constructor(private es:EmployeeService) { }

  ngOnInit(): void {
    this.fg=new FormGroup({
      search:new FormControl(null)
    });
    this.es.getemployees().subscribe(resp=>{
      this.employee=new MatTableDataSource<employee>(resp)
     this.employee.paginator=this.paginator;
     this.employee.sort=this.sort;
      this.dataloading=false
      this.iscomplete=true

    },
    error=>{
      this.dataloading=true;
      this.employeestatusloading="error while getting data...."
      this.iserror=true
    })
  }
  searchemployee(){
    if(this.fg.value!=null&&this.employee){
     console.log(this.employee.filter=this.fg.value.search.trim()) 
      
    }
  }
  clearfilter(){
    this.fg.setValue({search:''})
    this.searchemployee()
  }
}
