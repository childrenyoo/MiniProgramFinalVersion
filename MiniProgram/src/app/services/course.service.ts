import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Course } from '../module/course';
// import { COURSES } from './mock-courses';
import {catchError, map, tap, timeout} from 'rxjs/operators';
import { ConfigService} from './config.service';
import { Chapter} from '../module/contents';
import {Student} from '../module/student';
import {Message} from '../module/message';
import {StudentProgress} from '../module/student_progress';
import {Information} from '../module/information';
import {Certification} from '../module/certification';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'http://139.196.143.148:8080/teacher_course';
  private chaptersUrl = 'http://139.196.143.148:8080/course_chapters';
  private studentsUrl = 'http://139.196.143.148:8080/course_students';
  private courseUrl = 'http://139.196.143.148:8080/oneCourse';
  private chatBoxUrl = 'http://139.196.143.148:8080/messages';
  private progressUrl = 'http://139.196.143.148:8080/student_progress';
  private addCourseUrl = 'http://139.196.143.148:8080/addCourse';
  private logInUrl = 'http://139.196.143.148:8080/login';
  private registerUrl = 'http://139.196.143.148:8080/register';
  courses: Course[];

  constructor(
    private http: HttpClient,
    private configService: ConfigService
    ) {}
    /** GET heroes from the server */
  getCourses(name: string): Observable<Course[]> {
    // const url = `${this.coursesUrl}/?teacher_name=${name}`;
    const params = new HttpParams({
      fromString: 'teacher_name=' + name
    });
    return this.http.get<Course[]>(this.coursesUrl, { params })
      .pipe(
        tap(_ => this.configService.log('fetched courses')),
        catchError(this.configService.handleError<Course[]>('getCourses', []))
      );
    // return this.http.get<Course[]>(this.coursesUrl, {params});
  }

  /** GET hero by id. Return `undefined` when id not found */
  getCoursesNo404<Data>(id: number): Observable<Course> {
    const url = `${this.coursesUrl}/?teacher_id=${id}`;
    return this.http.get<Course[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.configService.log(`${outcome} teacher id=${id}`);
        }),
        catchError(this.configService.handleError<Course>(`getCourses id=${id}`))
      );
  }

  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Course> {
  //   const url = `${this.coursesUrl}/${id}`;
  //   return this.http.get<Course>(url).pipe(
  //     tap(_ => this.configService.log(`fetched teacher id=${id}`)),
  //     catchError(this.configService.handleError<Course>(`getCourses id=${id}`))
  //   );
  // }
  // 根据课程id获取章节信息
  getChapterByCourseId(id: string): Observable<Chapter[]> {
    const params = new HttpParams({
      fromString: 'content_id=' + id,
    });
    return this.http.get<Chapter[]>(this.chaptersUrl, { params })
      .pipe(
        tap(_ => this.configService.log('fetched chapters')),
        catchError(this.configService.handleError<Chapter[]>('getChapterByCourseId', []))
      );
  }
  // 根据课程id获取选课学生
  getStudentByCourseId(id: string): Observable<Student[]> {
    const params = new HttpParams({
      fromString: 'content_id=' + id,
    });
    return this.http.get<Student[]>(this.studentsUrl, { params })
      .pipe(
        tap(_ => this.configService.log('fetched students')),
        catchError(this.configService.handleError<Student[]>('getStudentByCourseId', []))
      );
  }
  // 根据content_id找整条纪录
  getCourseByContentId(id: string): Observable<Course> {
    const params = new HttpParams({
      fromString: 'content_id=' + id,
    });
    return this.http.get<Course>(this.courseUrl, { params })
      .pipe(
        tap(_ => this.configService.log('fetched students')),
        catchError(this.configService.handleError<Course>('getCourseByContentId'))
      );
  }
  // 根据chatBox_id找章节内容
  getMessageByChatBoxId(id: string): Observable<Message[]> {
    const params = new HttpParams({
      fromString: 'chatbox_id=' + id,
    });
    return this.http.get<Message[]>(this.chatBoxUrl, { params })
      .pipe(
        tap(_ => this.configService.log('fetched students')),
        catchError(this.configService.handleError<Message[]>('getMessageByChatBoxId'))
      );
  }
  // 根据chatBox_id找选课学生及其学习进度和作业完成情况
  getStudentProgressByChatBoxId(id: string): Observable<StudentProgress[]> {
    const params = new HttpParams({
      fromString: 'chatbox_id=' + id,
    });
    return this.http.get<StudentProgress[]>(this.progressUrl, { params })
      .pipe(
        tap(_ => this.configService.log('fetched students')),
        catchError(this.configService.handleError<StudentProgress[]>('getStudentProgressByChatBoxId'))
      );
  }

  addCourse(courseName: string, courseEName: string, chapterName: string, chapterEName: string, contents: string): Observable<Information> {
    const teacherName = sessionStorage.getItem('currentUser');
    const params = new HttpParams()
      .set('courseName', courseName)
      .set('courseEName', courseEName)
      .set('chapterName', chapterName)
      .set('chapterEName', chapterEName)
      .set('contents', contents)
      .set('teacherName', teacherName);
    return this.http.get<Information>(this.addCourseUrl, { params })
      .pipe(
        tap(_ => this.configService.log('add courses')),
        catchError(this.configService.handleError<Information>('addCourse'))
      );
  }
  addTmpCourse(contents: string): void {
    const params = new HttpParams()
      .set('contents', contents);
    this.http.get(this.addCourseUrl, { params });
  }
  logIn(username: string, password: string): Observable<Certification> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.get<Certification>(this.logInUrl, { params })
      .pipe(
        tap(_ => this.configService.log('login'),
          catchError(this.configService.handleError<Certification>('login'))
      ),
        timeout(5000),
      );
  }
  register(username: string, password: string): Observable<Certification> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.get<Certification>(this.registerUrl, {params})
      .pipe(
        tap(_ => this.configService.log('register')),
        catchError(this.configService.handleError<Certification>('register'))
      );
  }
}
