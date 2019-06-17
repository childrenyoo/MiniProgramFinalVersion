import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Information} from '../module/information';
import {Certification} from '../module/certification';
import {CourseService} from '../services/course.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  confirmPassword: string;
  alert: string;
  certi: Certification;
  constructor(
    private courseService: CourseService,
    private router:  Router
  ) {
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.username === undefined || this.password === undefined ) {
      this.alert = '请输入完整登录信息';
    } else {
      this.register(this.username, this.password);
    }
  }

  register(username: string, password: string) {
    this.courseService.register(username, password).subscribe(data => {
        this.username = data.username;
        this.certi = new Certification(data.status, data.username);
        console.log(data);
        console.log('this.certi.status:' + this.certi);
        if (this.certi.status === 1) {
          this.alert = '注册成功';
          setTimeout(() => {this.alert = ''; }, 2000);
          this.router.navigate(['/login'])
        } else {
          this.alert = '用户名已存在';
        }
      });
    }

  }

