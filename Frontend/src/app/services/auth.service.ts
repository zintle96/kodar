import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders,} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient,) { }
 

  //this bring the url from the environment variables
  baseurl:string = environment.BASEURL;

  public isAuthenticated() : boolean{
      const authToken = localStorage.getItem('token')

      if(authToken){
        return true
      }

      return false
  }

  logout() {

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // this.router.navigate(['/landing'])
  }
  

  checkUserAuthenticated(){
      const authToken =localStorage.getItem('token')
      //console.log(authToken)  
     let headers = new HttpHeaders();
      headers= headers.set('Authorization',`Bearer ${authToken}`);
      //const options =  { headers: new HttpHeaders({'Authorization': `zz.yy.zz`})}
      //console.log('headers',headers.get("Authorization"));

      return this.http.get(`${this.baseurl}/course`,{headers})
    }

}
 