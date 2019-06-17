import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  title = 'MiniProgram';
  isLogin: boolean;
  account: string;
  constructor(
    private messageService: MessageService,
    private router: Router,
  ) {
    this.messageService.message$.subscribe((data: any) => {
      this.refresh();
    });
  }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (sessionStorage.getItem('currentUser')) {
      this.isLogin = true;
      this.account = sessionStorage.getItem('currentUser');
    } else {
      this.isLogin = false;
    }
  }
  exit(){
    sessionStorage.removeItem('currentUser');
    this.refresh();
    this.router.navigate(['/home']);
  }

}
