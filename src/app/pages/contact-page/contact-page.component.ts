import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  subscription: Subscription;
  // contacts: Contact[];
  contacts$: Observable<Contact[]>;
  selectedContactId: string;

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }
  onRemoveContact(contactId: string) {
    // console.log('contactId pet app:', contactId);
    this.contactService.deleteContact(contactId);
    // this.userMsgService.setMsg(`Pet (${contactId}) removed!`)
  }
  // deleteContact(selectedContactId) {
  //   this.contactService.deleteContact(selectedContactId);
  // }
}
