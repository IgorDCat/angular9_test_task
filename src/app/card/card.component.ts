import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Note } from '../note-details/note.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() @HostBinding() isActive: boolean
  @Input() note: Note

  constructor() { }

  ngOnInit(): void {
  }

}
