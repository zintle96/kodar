import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  //baseurl brings the url in the enviroment file
  baseurl: String = environment.BASEURL;

  constructor(private http: HttpClient) {}

  getAllCourse() {
    return this.http.get<any>(`${this.baseurl}/course`);
  }

  getlessons(courseName: any) {
    console.log('service :', courseName);
    return this.http.get<any>(`${this.baseurl}/course/lessons/${courseName}`);
  }

  getProgress(userId: string) {
    console.log(userId)
    return this.http.get<any>(`${this.baseurl}/course/progress/${userId}`);
  }

  updateProgress({
    user_id,
    courseName,
    topic_id,
    contributionAmount,
  }): Observable<any> {
    console.log({ user_id, courseName, topic_id, contributionAmount });
    return this.http.put<any>(`${this.baseurl}/course/progress`, {
      user_id,
      courseName,
      topic_id,
      contributionAmount,
    });
  }
}
