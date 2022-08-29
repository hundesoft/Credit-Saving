import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  readonly APIUrl="http://localhost/Credit-Saving/Backend/api/registration.php";

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('login', { username, password });
  }

}