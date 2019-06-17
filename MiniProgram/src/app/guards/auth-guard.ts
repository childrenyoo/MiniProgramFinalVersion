import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const path = route.routeConfig.path;
    if (sessionStorage.getItem('currentUser')) {
      // 已登录所以返回true
      return true;
    } else {
      // 未登录，所以跳转到登录页并且返回url
      this.router.navigate(['/login']);
      return false;
    }
    // if (path === 'login') {
    //   if (!sessionStorage.getItem('currentUser')) {
    //     // 未登录，跳转到当前路由
    //     return true;
    //   } else {
    //     // 已登录，跳转到home
    //     this.router.navigate(['/courses']);
    //     return false;
    //   }
    // }
  }
}
