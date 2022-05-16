import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService} from 'ngx-ui-loader'
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { TopicService } from 'src/app/services/topic.service';


@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {

  courseName: string;
  userId: number;
  isQuizComplted: Boolean = false;
  topicDone :any;


  constructor(private http: HttpClient,
     private ngxLoader: NgxUiLoaderService,
     private router: Router,
     private route:ActivatedRoute, private quizService: QuizService,
     private activatedRoute: ActivatedRoute,
     private topicService: TopicService
     ) { }

  @Input() topic: any;
  @Input() contributionAmount: number;
  @Input() topicsDone: any;
  user: any;



  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("user"));

    this.courseName = this.route.snapshot.paramMap.get('courseName');
    this.topicDone = this.route.snapshot.paramMap.get('topic_done')
   
    //console.log('my topic:', this.topic)
    this.ngxLoader.start();
    this.topicService.getLessons(this.topic.topic_id).subscribe((data) => {
      this.topic.lessons = data
      //console.log('lesson data: ', data)
    })
    this.ngxLoader.stop()


    //  this.getTopicsDone()

  }

  onActivate(event) {
    window.scroll(0,0);
  }

  isQuizFinished(item: any){
      if( this.topicsDone.indexOf(`${item}`) != -1 ){
        return true
      }
      // console.log('topic is finished')
      return false
  }

  
}
