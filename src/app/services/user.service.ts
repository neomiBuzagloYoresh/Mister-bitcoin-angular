import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageServiceService) {}

  USER_KEY = 'user_db';
  private _user$ = new BehaviorSubject<User>(
    this.storageService.loadFromStorage(this.USER_KEY)
  );
  public user$ = this._user$.asObservable();

  getUser() {
    return this.user$;
  }
  getCurrUser() {
    const user = this.storageService.loadFromStorage(this.USER_KEY);
    return user || this.user$;
  }

  public login(username: string) {
    let user = this.storageService.loadFromStorage(this.USER_KEY);
    if (!user) {
      user = { name: username, coins: 100, moves: [] };
      this.storageService.saveToStorage(this.USER_KEY, user);
    }
    this._user$.next(user);
  }

  public transfer(amount: number, contact: Contact): void {
    let newMove = new Move(
      this._makeId(),
      contact._id,
      contact.name,
      Date.now(),
      amount
    );

    let updateUser = { ...this._user$.value };

    updateUser.coins -= amount;
    // [].unshift(newMove)
    updateUser.moves.unshift(newMove);
    console.log('updateUser', updateUser);

    this._user$.next(updateUser);
    this.storageService.saveToStorage(this.USER_KEY, updateUser);
  }

  public createMove(amount: number, contact: Contact) {
    return {
      id: this._makeId(),
      at: Date.now(),
      to: contact.name,
      toId: contact._id,
      amount,
    };
  }

  public logout() {
    localStorage.clear();
    this._user$.next(null);
  }

  private _makeId(length = 5) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}

// function addMove(contact, amount) {
//   let user = StorageService.loadFromStorage(USER_KEY)
//   const move = {
//       id: makeId(),
//       at: Date.now(),
//       to: contact.name,
//       toId: contact._id,
//       amount,
//   }

//   user.coins = user.coins - amount
//   console.log(amount);
//   user.moves.push(move)
//   StorageService.saveToStorage(USER_KEY, user)
//   return user
// }

// Observable<boolean>
