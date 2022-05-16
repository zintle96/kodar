import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.scss']
})
export class CourseProgressComponent implements OnInit {
  courses = [];
  public currentValue: number;

  private user = JSON.parse(localStorage.getItem('user'))

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const userId = this.user.user_id
    
    this.courseService.getProgress(userId).subscribe(data => {
      console.log(data)
      this.courses = data.map( (course:any) => {
        if(course.percentage == null) {
          return {...course, percentage: 0}
        }
        return course
      })
      console.log(this.courses)
    });

      // this.courseService.getProgress().subscribe({
      //   next:(data) => {
      //     this.courses.forEach(course => {
      //         data.forEach(progress => {
      //             if( course.course_id == progress.course_id ){
      //                 course.percentage = progress.percentage ? `${progress.percentage}%` : '0%';
      //             }
      //         })
      //     })

      //     console.log(this.courses)
      //   }

      // })


  }

 

}
