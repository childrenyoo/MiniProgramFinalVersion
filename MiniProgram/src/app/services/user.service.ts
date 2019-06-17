import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Information} from '../module/information';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ConfigService} from './config.service';
import { Certification } from '../module/certification';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl: 'http://localhost:8080/login';
  private registerUrl: 'http://localhost:8080/register';
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
  }
  logIn(username: string, password: string): Observable<Certification> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.get<Certification>(this.loginUrl, {params});
  }
  register(username: string, password: string): Observable<Certification> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.get<Certification>(this.registerUrl, {params});
  }
}
