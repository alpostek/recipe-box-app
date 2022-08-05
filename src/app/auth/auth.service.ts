import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  loginStatus = new BehaviorSubject<boolean>(false);
  isLoggedIn: boolean = false;

  login(username: string, password: string){
    this.isLoggedIn = username === 'admin' && password === 'admin';
    localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
    this.loginStatus.next(true);
    this.router.navigate(['/']);
  }

  autologin(){
    const loggedData = JSON.parse(localStorage.getItem('isLoggedIn') as string);
    if(!loggedData){
      return;
    }
    this.loginStatus.next(true);
  }

  logout(): void{
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.loginStatus.next(false);
    this.router.navigate(['/auth']);
  }
}
