import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly APIUrl="http://localhost/Credit-Saving/Backend/api/registration.php";

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(`${this.APIUrl}`);
  }
  // getRegistered():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl);
  // }

  postData(data:any){
this.http.post<any>(this.APIUrl,data);
  }
}
