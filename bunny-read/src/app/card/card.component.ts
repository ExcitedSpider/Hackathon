import { Component, OnInit, Input } from '@angular/core';
<<<<<<< Updated upstream
import { Card } from '../card';
=======

>>>>>>> Stashed changes
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  @Input() cardName: string

  constructor() { }

  ngOnInit() {
  }

}
