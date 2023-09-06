import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin = false;

  constructor() { }

  login(){
    this.isLogin = true;
  }

  logout(){
    this.isLogin = false;
  }

  isAuthenticated(): boolean{
    return this.isLogin;
  }
}

