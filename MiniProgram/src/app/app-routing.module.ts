import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { StudentsComponent } from './students/students.component';
import { AddCourseComponent} from './add-course/add-course.component';
import {ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import {AuthGuard} from './guards/auth-guard';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard], children: [
      { path: 'course_detail/:content_id', component: CourseDetailComponent, canActivate: [AuthGuard]},
      { path: 'students', component: StudentsComponent },
      { path: 'chapters', component: ChaptersComponent  },
      { path: 'add_course', component: AddCourseComponent },
      { path: 'chapter_detail/:chatBox_id', component: ChapterDetailComponent, canActivate: [AuthGuard]},
    ]},
  { path: '**', component: CoursesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
