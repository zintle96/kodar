import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  //base url
  BASEURL:string = environment.BASEURL;

  //this bring the url from the environment variables
  baseurl:string  = environment.BASEURL;
  constructor(private http: HttpClient) { }

  signIn(data: any) {
      return this.http.post<any>(`${this.baseurl}/auth/login`, data, {
      withCredentials: true
    })
  }
}
