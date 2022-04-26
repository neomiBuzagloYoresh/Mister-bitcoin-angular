import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { BitCoinService } from 'src/app/services/bit-coin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tranfer-fund',
  templateUrl: './tranfer-fund.component.html',
  styleUrls: ['./tranfer-fund.component.scss'],
})
export class TranferFundComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  @Input() contact: Contact;
  amount: number;

  ngOnInit(): void {
    console.log(this.contact);
  }

  onTransfer() {
    this.userService.transfer(this.amount, this.contact);
  }
}
