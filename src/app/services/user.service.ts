import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { LoginUser } from '../models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// const users = [
//   { username: 'neomi', password: '123' },
//   { username: 'noam', password: '123' },
// ];
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageServiceService) {}
  // username: string;

  USER_KEY = 'user_db';
  // USER_KEY: string = 'user_db';
  private _user$ = new BehaviorSubject<User>(
    this.storageService.loadFromStorage(this.USER_KEY)
  );
  public user$ = this._user$.asObservable();

  getUser() {
    return this.user$;
  }

  public login(username: string) {
    // let users = this._usersDb;
    let user = this.storageService.loadFromStorage(this.USER_KEY);
    if (!user) {
      user = { name: username, coins: 100, moves: [] };
      this.storageService.saveToStorage(this.USER_KEY, user);
    }
    this._user$.next(user);
  }

  logout() {}
}

// Observable<boolean>
