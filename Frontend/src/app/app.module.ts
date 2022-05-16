import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ContainerComponent } from './components/container/container.component';
import { InstructionQuizComponent } from './components/instruction-quiz/instruction-quiz.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { ChangeBackgroundDirective } from './change-background.directive';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { SpacerComponent } from './components/spacer/spacer.component';
import { IntroHtmlLesson1Component } from './pages/intro-html-lesson1/intro-html-lesson1.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CourseProgressComponent } from './components/course-progress/course-progress.component';
import { ProgressCardComponent } from './components/progress-card/progress-card.component';
import { ProgressbarModule, ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { NgProgressModule } from 'ngx-progressbar';
import { EditorComponent } from './editor/editor.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ResultsComponent } from './components/results/results.component';
import { ChangeBgDirective } from './change-bg.directive';
import { CodingPageComponent } from './pages/coding-page/coding-page.component';
// import { IntroHtml1Component } from './components/intro-html1/intro-html1.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LandingPageComponent,
    DashboardComponent,
    NavbarComponent,
    UserProfileComponent,
    SyllabusComponent,
    TabsComponent,
    TopicCardComponent,
    BackButtonComponent,
    CourseCardComponent,
    OverviewComponent,
    ContainerComponent,
    InstructionQuizComponent,
    QuizQuestionsComponent,
    ChangeBackgroundDirective,
    SpacerComponent,
    IntroHtmlLesson1Component,
    LessonsComponent,
    CourseProgressComponent,
    ProgressCardComponent,
    EditorComponent,
    ScrollToTopComponent,
    ResultsComponent,
    ChangeBgDirective,
    CodingPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxUiLoaderModule, NgxScrollTopModule,
    ProgressbarModule,
    NgProgressModule
  ],
  providers: [ProgressbarConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
