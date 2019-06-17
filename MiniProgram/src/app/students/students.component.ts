import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../module/student';

import {ActivatedRoute} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input()
  studentsName: string[];
  @Input()
  progressValue: number[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}
  // getStudents(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.studentService.getStudent(id).subscribe(course => this.students = course.students);
  // }

}
