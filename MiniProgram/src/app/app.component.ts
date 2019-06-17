import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiniProgram';
  isLogin: boolean;
  account: string;
  constructor() {
    this.isLogin = false;
    this.account = 'teacher1';
  }
  ngOnInit() {
    if (sessionStorage.getItem('currentUser') === null) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.account = sessionStorage.getItem('currentUser');
    }
  }
}
