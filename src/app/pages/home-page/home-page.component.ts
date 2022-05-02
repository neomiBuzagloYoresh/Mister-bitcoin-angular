import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
// import { NgModule } from '@angular/core';
// import {
//   ɵdetectChanges as detectChanges,
//   ɵmarkDirty as markDirty,
// } from '@angular/core';

import { Observable, Subscriber, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitCoinService } from 'src/app/services/bit-coin.service';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from 'src/app/models/login.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitCoinService: BitCoinService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onLoopCompleteCalledTimes = 0;
  player: any;
  user: User;
  bitcoin: any;
  // loginUser: any;
  username: string;
  userSubscriber: Subscription;
  userMoves: any;
  // userLoged$: Observable<LoginUser[]>;
  contact: Contact;

  ngOnInit(): void {
    this.bitcoin = this.bitCoinService
      .getRate()
      .subscribe((bitcoin) => (this.bitcoin = bitcoin));
    // console.log(this.bitcoin);

    this.user = this.userService.getCurrUser();
    if (!this.user) {
      this.userSubscriber = this.userService.user$.subscribe(
        (user) => (this.user = user)
      );
    }

    if (!this.user) this.router.navigateByUrl('login');
    // console.log(this.user);
    this.userMoves = this.user.moves.splice(0, 3);
  }
  get btc() {
    // console.log(this.user.coins / this.bitcoin);
    return (this.user.coins / this.bitcoin).toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
  }
  options: AnimationOptions = {
    path: '../../../assets/62792-bitcoin-motion.json',
  };
}

// ngOnDestroy() {
//   this.userSubscriber.unsubscribe();
// }
// export function playerFactory() {
//   // add this line
//   return import('lottie-web'); // add this line
// }
