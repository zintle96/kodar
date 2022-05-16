import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { QuizService } from 'src/app/services/quiz.service';
import { TopicService } from 'src/app/services/topic.service';



@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    public ngxLoader: NgxUiLoaderService,
    private quizService: QuizService,
    private topicService: TopicService
    ) { }
  topics: any = []
  contributionAmount: number;
  urls: any;
  user: any;
  topicDone :any[] = [];
  error: string;


  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("user"));


    const overViewUrl = `/overview/${this.route.snapshot.paramMap.get('courseName')}`
    const syllabusUrl = `/syllabus/${this.route.snapshot.paramMap.get('courseName')}`
    const courseName = this.route.snapshot.paramMap.get('courseName');

    this.getTopicsDone()

    this.urls = { overViewUrl, syllabusUrl }
    console.log(this.urls);
    this.ngxLoader.start();
      this.topicService.getTopics(courseName).subscribe(data => {
        console.log(data)

        this.topics = data.topics ? data.topics : []

        if( data.error ){
            this.error = data.error
            console.log(this.error)
            Swal.fire({ title: data.title, icon:'error' , text: "Course not available at the moment." ,confirmButtonColor: '#24A0ED'});
        }

        this.contributionAmount = Math.ceil(100 / this.topics.length);
        console.log('CONTRIBUING AMOUNT:', this.contributionAmount)
      })
    this.ngxLoader.stop();

    
  }


  getTopicsDone() {
    const user_id = this.user.user_id
    const courseName = this.route.snapshot.paramMap.get('courseName');

    this.quizService.getTopicsDoneQuery(user_id, courseName)
    .subscribe((res) => {
      this.topicDone = res ? res : [];
     });
  }

}


