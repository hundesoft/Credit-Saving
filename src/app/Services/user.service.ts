import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from '../Models/customer.model';
import { UserAccount } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl="http://localhost/Credit-Saving/Backend/api/userAccount.php";

  constructor(private httpClient: HttpClient) { }
  
  getData(): Observable<UserAccount[]> {
    return this.httpClient.get<UserAccount[]>(this.APIUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
 postData(userAccount:UserAccount): Observable<UserAccount> {
    return this.httpClient.post<UserAccount>(this.APIUrl,userAccount)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

     
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}