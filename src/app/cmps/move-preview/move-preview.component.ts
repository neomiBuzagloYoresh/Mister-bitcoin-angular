import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss'],
})
export class MovePreviewComponent implements OnInit {
  constructor() {}
  @Input() move: Move;
  @Input() contact: Contact;
  ngOnInit(): void {
    // if (this.contact.img === undefined) {
    //   this.contact;
    // }
  }
}
