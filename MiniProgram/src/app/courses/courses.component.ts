import { Component, OnInit } from '@angular/core';
import { Course } from '../module/course';
import { CourseService  } from '../services/course.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  teacherName: string;
  constructor(private courseService: CourseService,
              private messageService: MessageService,
              private router: Router) {
    this.messageService.message$.subscribe((data: any) => {
      this.getCourses();
    });
  }

  ngOnInit() {
    this.getCourses();
  }
  getCourses(): void {
    this.teacherName = sessionStorage.getItem('currentUser');
    // this.courses = this.courseService.getCourses(this.teacherName);
    this.courseService.getCourses(this.teacherName)
      .subscribe(data => this.courses = (data as any).map(u => new Course(u.course_id, u.course_name, u.content_id, u.teacher_id)) );
    console.log(this.courses);
  }
  print(id: number): void {
    console.log(id);
  }

}
