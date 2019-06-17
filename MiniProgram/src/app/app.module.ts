import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StudentsComponent } from './students/students.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NavigateComponent } from './navigate/navigate.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './guards/auth-guard';
import { ProgressBarModule} from 'angular-progress-bar';
import { EqualValidatorDirective } from './equal-validator.directive';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    StudentsComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    AddCourseComponent,
    NavigateComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EqualValidatorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    ProgressBarModule
  ],
  providers: [AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
