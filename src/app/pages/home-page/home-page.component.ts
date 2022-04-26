import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitCoinService } from 'src/app/services/bit-coin.service';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from 'src/app/models/login.model';
import { ActivatedRoute, Router } from '@angular/router';

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

  user: User;
  bitcoin: any;
  loginUser: any;
  username: string;
  userSubscriber: Subscription;
  // userLoged: LoginUser;

  userLoged$: Observable<LoginUser[]>;

  ngOnInit(): void {
    this.bitcoin = this.bitCoinService.getRate();
    this.userSubscriber = this.userService.user$.subscribe(
      (user) => (this.user = user)
    );
    if (!this.user) this.router.navigateByUrl('login');
    console.log(this.user);
  }
  get btc() {
    return (this.user.coins / this.bitcoin).toLocaleString();
  }

  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }
}
// getRate
