import {Component, Input, OnInit} from '@angular/core';
import { CourseService} from '../services/course.service';
import { Location } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Message} from '../module/message';
import {StudentProgress} from '../module/student_progress';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  messages: Message[];
  studentsName: string[] = [];
  progress: number[];
  doHomework: string[];
  studentProgress: StudentProgress[];
  constructor(private courseService: CourseService,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
        this.getContents();
        this.getStudentProgress();
      }
    });
  }

  ngOnInit() {
    this.getContents();
    this.getStudentProgress();
  }
  getContents(): void {
    const id = this.route.snapshot.paramMap.get('chatBox_id');
    this.courseService.getMessageByChatBoxId(id)
      .subscribe(data => this.messages = (data as any).map(u => new Message(u.uuid, u.text, u.image_url, u.type)));
  }
  getStudentProgress(): void {
    const id = this.route.snapshot.paramMap.get('chatBox_id');
    this.courseService.getStudentProgressByChatBoxId(id)
      .subscribe(data => {
        //console.log(data);
        this.studentProgress = (data as any).map(u => new StudentProgress(u.studentName, u.progress, u.doHomework),
        this.studentsName = (data as any).map(u => u.studentName),
        this.progress = (data as any).map(u => u.progress),
        this.doHomework = (data as any).map(u => u.doHomework==1? '已完成': '未完成'),
        //console.log(this.doHomework)
        )});

  }
  goBack(): void {
    this.location.back();
  }

}
