import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm !: FormGroup
 
  constructor(private formBuilder: FormBuilder,private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }
  login() {
      this.router.navigateByUrl('/dashboard')
      console.log(this.loginForm.value, this.loginForm.value);
  }
}
