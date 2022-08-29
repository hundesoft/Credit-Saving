import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserAccount } from '../Models/user.model';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'profanis_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user: UserAccount | null;

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private loginService: LoginService) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }

  login(username: string, password: string) {
    return this.loginService.login(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        this.user = this.getUser(response.token);
      })
    );
  }

  private getUser(token: string): UserAccount | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserAccount;
  }
}