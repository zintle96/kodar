import { Component, OnInit } from '@angular/core';
import { CourseApiService } from 'src/app/services/coursesApi/course-api.service';
import { Lessons } from 'src/app/models/lessons';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  topics?: Lessons[];
  // lessonsContents: string[];

  constructor(private courseAPI: CourseApiService, private route: ActivatedRoute, private ngxLoader: NgxUiLoaderService, private router: Router) { }

  topic_id: string;
  lesson_id: string;
  lessonContents: any[];
  lessonExamples: any[] = [];
  moreInfo: string[];
  lessonsAndTopic: any;
  error: string;


  ngOnInit(): void {
    this.topic_id = this.route.snapshot.paramMap.get('topic_id')
    this.lesson_id = this.route.snapshot.paramMap.get('lesson_id')

    console.log(this.topic_id)

    console.log(this.route.snapshot.paramMap.get('topic_id'))
    this.retrieveTopics();
  }

  retrieveTopics(): void {
    this.ngxLoader.start();
    this.courseAPI.getAllLessons({topic_id: this.topic_id, lesson_id: this.lesson_id}).subscribe({
      next: (response) => {
        console.log('RESPONSE', response)

        if(!response.error){

          this.lessonsAndTopic = response
          this.lessonContents = this.lessonsAndTopic.lesson[0].lesson_content
          console.log(this.lessonContents)
    
          this.lessonExamples = this.lessonsAndTopic.lesson[0].lesson_examples
          console.log(this.lessonExamples)
    
          this.moreInfo = this.lessonsAndTopic.lesson[0].more_info
          //console.log(this.moreInfo)

           // console.log(response);
           

        }else {
          this.error = response.error
          console.log(response.error)
          Swal.fire({ title: response.title, icon:'error' , text: "Lessons do not exist for the specified topic" ,confirmButtonColor: '#24A0ED'});
        } 
        this.ngxLoader.stop();

      },
      error: (e) => console.error(e)

    });
  }

  openCodeEditor(example_desc:any) {
    console.log(example_desc)
    const lessonExample = this.lessonExamples.filter(lessonExample => lessonExample.example_desc == example_desc)
    console.log("example:", lessonExample[0].example)
    const lesson = lessonExample[0].example
    localStorage.setItem('lesson',lesson.toString())
    this.router.navigate(['/codeEditor']);
    // window.open('/codeEditor', '_blank');
  }
}
