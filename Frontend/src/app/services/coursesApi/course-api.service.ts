import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../../models/course/topic.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Lessons } from 'src/app/models/lessons';


@Injectable({
  providedIn: 'root'
})
export class CourseApiService {
  // bring me the database url from the environment variables
  baseUrl: string = environment.BASEURL;

  constructor( private http: HttpClient) { }

  // getAllTopics(): Observable<Topic[]> {
  //   // return this.http.get<Topic[]>(`${this.baseUrl}/overview`)
  // }

  getOverview(course:any) {
    // testing if we getting the course name of the select course
    console.log("course name works : ",course);
    return this.http.get<any>(`${this.baseUrl}/overview/${course}`);
  }

  getAllLessons({topic_id, lesson_id}): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lesson/${topic_id}/${lesson_id}`)
  }
}
