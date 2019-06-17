import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, Subject, Subscription, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  /**
   * content 模块里进行信息传输,类似广播@param type 发送的信息类型
   * 1-你的信息1
   * 2-你的信息2
   * 3-你的信息3
   */
  sendMessage(mess: string) {
    this.messageSource.next(mess);
  }
  // 清理信息:
  clearMessage() {
    this.messageSource.next();
  }

  // // 获取信息,@returns { Observable<any> } 返回消息监听
  // getMessage(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  // 使用该服务的地方,需要注册MessageService服务:
  constructor(private message: MessageService) {
  }



  // 调用该服务发送信息
  send(): void {
    this.sendMessage('我发消息了,你们接收下');
  }
}
