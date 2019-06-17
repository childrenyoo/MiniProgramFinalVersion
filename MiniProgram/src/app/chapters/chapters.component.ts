import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../module/course';
import { COURSES } from '../mock-courses';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Chapter} from '../module/contents';
@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  @Input()
  chapters: Chapter[];
  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
        // this.getChapters();
        // this.contentId = this.route.snapshot.paramMap.get('content_id');
      }
    });
  }


  ngOnInit() {}
  // getChapters(): void {
  //   const id = +this.route.snapshot.paramMap.get('content_id');
  //   this.courseService.getChapterByCourseId(id).subscribe(course => this.chapters = course.chapterName);
  //   console.log(id);
  //   console.log(this.chapters);
  // }


}
