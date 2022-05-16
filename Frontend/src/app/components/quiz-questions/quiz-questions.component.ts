import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss'],
})
export class QuizQuestionsComponent implements OnInit {
  quizes = [];
  questionList: any = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter: number = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  process: any = 0;
  isQuizComplted: Boolean = false;
  topicId: number;
  disable:boolean;
  courseName: string;
  contributionAmount: number;
  user = JSON.parse(localStorage.getItem('user'))
  isRestartQuiz: boolean = false;
  error: string;

  constructor(
    private route: Router,
    private quizSERVICES: QuizService,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService, private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    // this.startCounter();
    
    this.courseName = this.activatedRoute.snapshot.paramMap.get('courseName');
    this.topicId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('topic_id')
    );

    this.contributionAmount = parseInt(this.activatedRoute.snapshot.paramMap.get('contributionAmount'))
    this.loader.start()
    this.getQuestions();
    this.loader.stop()
  }

  //move to the next question
  nextQuestion() {
    this.currentQuestion++;
    console.log("question number ", this.currentQuestion);
    console.log("array of quizz ", this.quizes.length);

    if( this.currentQuestion < this.quizes.length - 1)
    {
        this.disable = false;
    }else{
      this.disable = true;
    }

    // this.resetCounter();
  }
  //go back to the previous question
  previousQuestion() {
    this.currentQuestion--;
    if( this.currentQuestion < this.quizes.length - 1)
    {
        this.disable = false;
    }
    // this.resetCounter()
  }
  //Check if the answer is correct
  answer(currentQuestn: number, option: any) {

      if (this.currentQuestion + 1 >= this.quizes.length) {
        // this.stopCounter();
        // this.route.navigateByUrl('results');
        this.isQuizComplted = true;
    }
    if (option.correct) {
      this.points += 1;
      this.correctAnswer++;
      this.currentQuestion++;
      // this.resetCounter();
      this.getPercentage();
    } else {
      // this.points-=1;
      this.currentQuestion++;
      this.incorrectAnswer++;
      // this.resetCounter();
      this.getPercentage();
    }
  }
  //start the counter
  // startCounter() {
  //   this.interval$ = interval(1000).subscribe((val) => {
  //     this.counter--;
  //     if (this.counter === 0) {

  //       if(this.currentQuestion < this.quizes.length - 1)
  //       {
  //           this.currentQuestion++;
  //           this.counter = 60;
  //           this.points -= 1;
  //       }else{
  //         this.isQuizComplted= true;

  //       }
  //     }
  //   });
  //   setInterval(() => {
  //     this.interval$.unsubscribe();
  //   }, 60000);
  // }

  //stop count
  // stopCounter() {
  //   if (this.quizes.length === 10) {
  //     this.interval$.unsubscribe();
  //     this.counter = 0;
  //   }
  // }
  //reset counter
  // resetCounter() {
  //   this.counter = 60;
  //   this.startCounter();
  // }
  //reset quiz
  resetQuiz() {
    // this.resetCounter();
    this.getQuestions();
    this.points = 0;
    // this.counter = 60;
    this.currentQuestion = 0;
    this.process = 0;
  }
  //calculate the percentage of the attempted quiz
  getPercentage() {
    this.process = Math.round(((this.correctAnswer / this.quizes.length) * 100));
    return this.process;
  }
  //get all the questions
  getQuestions() {
    
    this.quizSERVICES.getAllQuiz(this.topicId).subscribe((response) => {
      console.log(response);
      this.quizes = response.quiz;
      console.log('quiz questions:', this.quizes); 
      if ( this.quizes.length === 0) {
       this.error = response.error
       console.log('Error :', this.error)
       Swal.fire({icon:'warning',title: 'Oops...', text: this.error ,confirmButtonColor: '#24A0ED'})
      }

    });
    
   
  }
  // FINISH THE QUIZ AND GO BACK TO SYLLABUS PAGE
  finishQuiz(){
    // UPDATE THE PROGRESS TABLE
    const userId = this.user.user_id
    console.log(userId)
    console.log({user_id: userId, courseName: this.courseName, topic_id: this.topicId, contributionAmount: this.contributionAmount})
    this.courseService.updateProgress({user_id: userId, courseName: this.courseName, topic_id: this.topicId, contributionAmount: this.contributionAmount}).subscribe(response => {
      console.log(response)

      if(response.success){
          this.route.navigateByUrl(`syllabus/${this.courseName}`);
      }
    })

  }


  restartQuiz(){
    this.isQuizComplted = false;
    this.resetQuiz()
    this.correctAnswer =0;
    this.incorrectAnswer = 0;

    // this.currentQuestion  =0;
    // this.counter = 60;
    // this.points = 0;
  }
}
