import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OverviewComponent } from './pages/overview/overview.component'
import { AuthGuard } from './auth.guard';
import { InstructionQuizComponent } from './components/instruction-quiz/instruction-quiz.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { IntroHtmlLesson1Component } from './pages/intro-html-lesson1/intro-html-lesson1.component';
import { CourseProgressComponent } from './components/course-progress/course-progress.component';
import { ResultsComponent } from './components/results/results.component';
import { CodingPageComponent } from './pages/coding-page/coding-page.component';

const routes: Routes = [
  { path: '',redirectTo:'landing',pathMatch:'full'},
  {path:'instruction/:courseName/:topic_id/:contributionAmount',component:InstructionQuizComponent},
  {path:'questions/:courseName/:topic_id/:contributionAmount',component:QuizQuestionsComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '',redirectTo:'landing',pathMatch:'full'},
  {path: 'landing',component:LandingPageComponent},
  {path: 'overview/:courseName',component:OverviewComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'lesson/:topic_id/:lesson_id', component: LessonsComponent},
  {path: 'syllabus/:courseName', component: SyllabusComponent, canActivate: [AuthGuard]},
  {path: 'intro/:topic_id/:lesson_id', component: IntroHtmlLesson1Component},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'progress', component: CourseProgressComponent},
  {path:'results',component:ResultsComponent},
  {path: 'codeEditor', component: CodingPageComponent},
  {path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
