import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements OnInit {
  max: number = 100;
  value: number = 0;

  percentage: string;

  constructor(private courseService: CourseService, public progress: ProgressbarModule, private route: ActivatedRoute) { }
  progress_id: number;
  course_id: string;

  @Input() courses: any;
  @Input() topic: any;

  ngOnInit(): void {

    this.courseService.getAllCourse().subscribe(data => {
      this.courses = data.courses
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

