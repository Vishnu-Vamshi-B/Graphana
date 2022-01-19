import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  redirectUrl: string | null = null;
  isAuthenticated: boolean = false;
  // isEnteredTokken: boolean = false;
  constructor() { }

  TokenLogin(){
    this.isAuthenticated = true;
  }

}
