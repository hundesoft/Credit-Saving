import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAccount } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';
import { DialogComponent } from '../dialog/dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userAccount:UserAccount[] = [];

  constructor(private userService:UserService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  getUser(){
    this.userService.getData().subscribe((
      response)=>{
      this.userAccount= response;
      console.log(this.userService.getData());
    },(error=>{

    }));
  }

  openDialog() {
    this.dialog.open(UserDialogComponent,{
      width:'60%',
      height:'auto'
    });
  }
}
