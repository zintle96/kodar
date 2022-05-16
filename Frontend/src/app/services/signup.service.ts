
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users/users.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  //this bring the url from the environment variables
  baseurl:string = environment.BASEURL;
  constructor(private http: HttpClient) { }

  signUp(registerObj:any){
    //  return this.http.post<any>(`https://dashboard.heroku.com/apps/koder-backend/auth/register`, registerObj, {
    //    withCredentials: true
    //  });
    return this.http.post<any>(`${this.baseurl}/auth/register`, registerObj, {
      withCredentials: true
    })
  }

}
