import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  contact: Contact;

  // @Input() contactId: string;
  // contact: Contact;
  // @Output() onSelect = new EventEmitter<string>();

  async ngOnInit() {
    // const contact = await this.contactService
    //   .getContactById(this.contactId)
    //   .toPromise();
    // this.contact = contact;
    // console.log(this.contact);
    // this.route.data.subscribe((data) => {
    //   console.log(data);

    //   this.contact = data.contact;
    // });
    this.route.data.subscribe((data: { contact }) => {
      console.log(data);
      this.contact = data.contact;
    });
  }

  onBack() {
    this.router.navigateByUrl('contact');
  }
}
// this.route.data.subscribe(data=>{
//   this.pet = data.pet
// })
