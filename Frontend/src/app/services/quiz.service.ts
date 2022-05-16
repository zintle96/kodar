import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class QuizService {
  //baseurl brings the url in the enviroment file
  baseurl: String = environment.BASEURL;

  constructor(private http: HttpClient) {}

  getAllQuiz(id: number) {
    return this.http.get<any>(`${this.baseurl}/quiz/${id}`);
  }

  getTopicsDoneQuery(user_id: number, coursename: string) {
   return this.http.get<any>(`${this.baseurl}/quiz/topics_done/${user_id}/${coursename}`);
 }

}
