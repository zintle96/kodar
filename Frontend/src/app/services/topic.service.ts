import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  baseurl: String = environment.BASEURL;

  constructor(private http: HttpClient) { }

  getTopics(courseName: string): Observable<any>{
    return this.http.get<any>(`${this.baseurl}/topic/${courseName}`);
  }

  getLessons(topicId: string): Observable<any> {
    return this.http.get(`${this.baseurl}/lesson/${topicId}`);
  }

}
