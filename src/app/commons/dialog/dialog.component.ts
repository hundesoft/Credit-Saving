import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { Observable } from 'rxjs';
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
        lname: ['', Validators.required]
      }
    )
  }
  addCustomer(){
    // if(this.registrationForm.valid){
    //   this.registerService.postData(this.registrationForm.value).
    //   subscribe((res) => {
    //     console.log(res);
    //   });
    // }
    console.log(this.registrationForm.value);
  }


}
