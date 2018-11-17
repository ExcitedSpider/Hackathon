import { Component, OnInit } from '@angular/core';
import { Card } from '../card'
import { cards } from '../global'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cards: Card[] = cards;
  constructor() { }

  ngOnInit() {
  }

}
