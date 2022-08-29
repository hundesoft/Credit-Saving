import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  userForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required]
      }
    )
  }

  addUser() {
    console.log(this.userForm.value);
    this.userService.postData(this.userForm.value).
      subscribe((res: any) => {
        console.log(res);
      },
        err => {
          console.log(err);
        }
      )

  }

}

