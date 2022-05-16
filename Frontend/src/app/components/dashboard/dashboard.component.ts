import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CourseApiService } from 'src/app/services/coursesApi/course-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AyobaService } from 'src/app/services/ayoba.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  courses = [];
  myMsisdn;
  lessonCount: any = [];
  constructor(private courseService: CourseService,
     private router: Router, 
     private coursesApiService: CourseApiService,
     private ngxLoader: NgxUiLoaderService,
     private authService: AuthService, private ayobaService: AyobaService
     ) { }

  ngOnInit() {

    this.authService.checkUserAuthenticated()

    this.courseService.getAllCourse().subscribe(data => {
      this.ngxLoader.start();
      this.courses = data.courses
      console.log(this.courses)
      this.ngxLoader.stop();
      
    })
  }

  viewOverview(courseName: any) {
    this.router.navigate([`overview/${courseName}`]);
  }

  getMsisdn()
  {
      // this.ayobaService.getMsisdn().subscribe(msisdn =>{
      //  this.myMsisdn = msisdn
      // })
  }
}
