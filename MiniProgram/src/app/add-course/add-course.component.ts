import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../module/course';
import { CourseService } from '../services/course.service';
import {MatFormFieldModule} from '@angular/material';
import { Location} from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit  {
  courses: Course[];
  courseN: string;
  courseEN: string;
  chapterN: string;
  chapterEN: string;
  teaContents: string;
  message: string;
  info: string;
  @Output() childParam = new EventEmitter();
  constructor(private courseService: CourseService,
              private messageService: MessageService,
              private location: Location) { }

  ngOnInit() {


  }
  getCourses(): void {
    // this.courseService.getCourse().subscribe(courses => this.courses = courses);
  }
  add(courseName: string, courseEName: string, chapterName: string, chapterEName: string, teachingContents: string): void {
    this.courseService.addCourse(courseName, courseEName, chapterName, chapterEName, teachingContents)
      .subscribe(data => {
        this.info = data.infor;
        this.messageService.send();
      });
    console.log(courseName);

  }
  goback(): void {
    this.location.back();
  }
  onSubmit(value: string): void {
    console.log(value);
    if (this.courseN === undefined || this.courseEN === undefined || this.chapterN === undefined
        || this.chapterEN === undefined || this.teaContents === undefined) {
        this.message = '请完整填写课程信息';
    } else {
      this.add(this.courseN, this.courseEN, this.chapterN, this.chapterEN, this.teaContents);
      this.courseN = undefined;
      this.courseEN = undefined;
      this.chapterN = undefined;
      this.chapterEN = undefined;
      this.teaContents = undefined;
      this.message = undefined;
    }
  }
  refreshCourseList(): void {
    this.messageService.send();
  }
}
