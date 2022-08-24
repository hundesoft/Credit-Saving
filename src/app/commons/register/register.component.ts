import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterService } from 'src/app/Services/register.service';
import { DialogComponent } from '../dialog/dialog.component';


export interface CustomerData {
  id: string;
  fame: string;
  lname: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  customer:any = [];
  listData !: MatTableDataSource<any>;
  //displayedColumns: string[] = [];  
  
  // displayedColumns: string[] = ['id', 'fname', 'lname'];
  // dataSource !: MatTableDataSource<CustomerData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
  constructor(private registerService:RegisterService, private dialog:MatDialog) { }
 
  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.registerService.getData().subscribe((
      response)=>{
      this.customer = response;
      console.log(this.registerService.getData());
    },(error=>{

    }));
  }

  openDialog() {
    this.dialog.open(DialogComponent,{
      width:'65%',
      height:'auto'
    });
  }
}
