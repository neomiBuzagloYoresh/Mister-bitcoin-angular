import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login.model';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}
  isLoggedIn = null;

  checkIsLoggedIn(): boolean {
    this.isLoggedIn = this.userService.getCurrUser();
    return !!this.isLoggedIn.name;
  }

  //   login() {
  //     if (this.isLoggedIn) {
  //       return this.checkIsLoggedIn();
  //     }
  //   }
}
