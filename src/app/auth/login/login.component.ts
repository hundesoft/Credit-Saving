import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      });
  }
}
