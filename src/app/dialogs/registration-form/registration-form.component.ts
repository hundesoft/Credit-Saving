import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        address: ['', Validators.required]
      }
    )
  }

  addCustomer() {
    console.log(this.registrationForm.value);
    this.registerService.postData(this.registrationForm.value).
      subscribe((res: any) => {
        console.log(res);
      },
        err => {
          console.log(err);
        }
      )
      
  }

}
