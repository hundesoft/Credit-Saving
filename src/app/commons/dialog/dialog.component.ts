import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { from, Observable } from 'rxjs';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
registrationForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group(
      {
        fname:['',Validators.required],
        lname: ['', Validators.required],
        address:['', Validators.required]
      }
    )
  }

  addCustomer(){
    console.log(this.registrationForm.value);
    this.registerService.postData(this.registrationForm.value).
    subscribe((res:any) => {
      console.log(res);
    },
    err=>{
      console.log(err);
    }
    )
  }
 
}
