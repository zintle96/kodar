import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-instruction-quiz',
  templateUrl: './instruction-quiz.component.html',
  styleUrls: ['./instruction-quiz.component.scss']
})
export class InstructionQuizComponent implements OnInit {

  quiz: any;
  topicId: number;
  numberOfQuizQuestions: number;
  courseName: string;
  contributionAmount: number;
  error: string;

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizService, private loader: NgxUiLoaderService) { }


  ngOnInit(): void {

    this.loader.start()
    this.topicId = parseInt(this.route.snapshot.paramMap.get('topic_id'))
    this.courseName = this.route.snapshot.paramMap.get('courseName')
    this.contributionAmount = parseInt(this.route.snapshot.paramMap.get('contributionAmount'))

    this.quizService.getAllQuiz(this.topicId).subscribe(response => {
        this.quiz = response.quiz
        this.numberOfQuizQuestions = this.quiz.length

        if(this.numberOfQuizQuestions == 0) {
            this.error =  response.error
            console.log(this.error)
        }

        console.log(this.quiz)
    })

    this.loader.stop()
  }

  goToQuiz(){
    console.log(this.contributionAmount)
    
    this.router.navigate([`/questions/${this.courseName}/${this.topicId}`, this.contributionAmount])
  }



}
