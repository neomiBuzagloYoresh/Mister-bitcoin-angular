import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent implements OnInit {
  constructor() {}
  @Input() moves: Move[];
  @Input() contact: Contact;

  ngOnInit(): void {
    // console.log(this.moves);
  }
}
