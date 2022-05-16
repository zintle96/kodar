import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {


  constructor(private courseService: CourseService, private ngxLoader: NgxUiLoaderService) { }

  @Input() course:  any;

  ngOnInit(): void {

    //this.ngxLoader.startLoader('loader-01');
    //counting the number of lessons
      this.courseService.getlessons(this.course.course_id).subscribe(data => {
      this.course.lessonsCount = data.courses
      //this.ngxLoader.stopLoader('loader-01');
    })
 

  }
}
