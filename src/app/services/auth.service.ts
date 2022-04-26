import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  constructor() {}

  checkIsLoggedIn(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 0);
    });
  }

  //   login() {
  //     if (this.isLoggedIn) {
  //       return this.checkIsLoggedIn();
  //     }
  //   }
}
