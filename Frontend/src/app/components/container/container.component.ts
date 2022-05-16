import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseApiService } from 'src/app/services/coursesApi/course-api.service';
import { Topic } from '../../models/course/topic.model'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {


  topics?: Topic[];
  error:string ;

  constructor(private courseApiService: CourseApiService, private route: ActivatedRoute, public ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {

    let urlString = window.location.pathname;
    const courseName = urlString.substring(10);

    this.ngxLoader.start();
    this.courseApiService.getOverview(courseName).subscribe({
      next: (data) => {
        this.ngxLoader.stop();

        if(data.error){
          console.log(data.error);
          this.error = data.error
          Swal.fire({ title: data.title, icon:'error' , text: "Course not available at the moment." ,confirmButtonColor: '#24A0ED'});
        } else{
          this.topics = data.overview[0];
          console.log(this.topics);
        }

      },
      error: (e) => console.error(e)
    });
  }
}
