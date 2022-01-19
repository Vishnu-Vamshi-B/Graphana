import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService :AuthService,private router: Router){

  }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkTokken(state.url);
   
    }
      /*if(this.authService.isEnteredTokken()){
      return true;
    }else{
      return false;
    }*/

    checkTokken(url:string){
      if(this.authService.isAuthenticated) return this.authService.isAuthenticated;
      this.authService.redirectUrl = url;
      return this.router.parseUrl('/token-form');
    }
 
  
}
