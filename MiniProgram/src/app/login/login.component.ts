import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Information} from '../module/information';
import {Certification} from '../module/certification';
import {Route, Router} from '@angular/router';
import {CourseService} from '../services/course.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  alert: string;
  certi: Certification;
  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.username === undefined || this.password === undefined ) {
      this.alert = '请输入完整登录信息';
    } else {
      this.logIn(this.username, this.password);
    }
  }
  logIn(username: string, password: string) {
    this.courseService.logIn(username, password).subscribe(data => {
      this.username = data.username;
      this.certi = new Certification(data.status, data.username);
      // console.log('data.status:' + data.status);
      // console.log('this.certi.status:' + this.certi.status);
      if (this.certi.status === 1) {
        sessionStorage.setItem('currentUser', this.certi.username);
        console.log(this.certi.username);
        this.messageService.send();
        this.router.navigate(['/courses']);
      } else {
        this.alert = '用户名或密码错误';
      }
    });
  }

}
