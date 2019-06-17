import { Component, OnInit } from '@angular/core';
import { Student } from '../module/student';
import { CourseService } from '../services/course.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Course} from '../module/course';

import {Chapter} from '../module/contents';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  chapters: Chapter[];
  studentsName: string[] = [];
  course: Course;
  courseName: string;
  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
        this.getCourseDetail();
      }
    });
  }

  ngOnInit() {
    this.getCourseDetail();
  }
  getCourseDetail(): void {
    const id = this.route.snapshot.paramMap.get('content_id');
    this.courseName = id;
    // this.courseService.getCourseByContentId(id)
    //   .subscribe(data => this.course = (data as any).map(u => new Course(u.course_id, u.course_name, u.content_id, u.teacher_id)));
    // console.log(this.course);
    this.courseService.getChapterByCourseId(id)
      .subscribe(data => this.chapters = (data as any).map(u => new Chapter(u.content_id, u.id, u.text, u.chatbox_id)) );
    this.courseService.getStudentByCourseId(id)
      .subscribe(
        data => this.studentsName = (data as any).map(u => new Student(u.student_id, u.student_name, u.email, u.password, u.sex).name));
  }

}
