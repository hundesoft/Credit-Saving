import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Customer } from '../Models/customer.model';
import {catchError} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly APIUrl="http://localhost/Credit-Saving/Backend/api/registration.php";

  constructor(private httpClient: HttpClient) { }
  
  getData(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.APIUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
 postData(customer:Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.APIUrl,customer)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
//   find(id): Observable<Post> {
//     return this.httpClient.get<Post>(this.apiURL + '/posts/' + id)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }
    
//   update(id, post): Observable<Post> {
//     return this.httpClient.put<Post>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }
    
  delete(id:number){
    return this.httpClient.delete<Customer>(this.APIUrl+ id)
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
 