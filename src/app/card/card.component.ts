import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() @HostBinding() isActive: boolean
  @Input() title: string
  @Input() text: string

  constructor() { }

  ngOnInit(): void {
  }

}
