import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Card } from '../card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

<<<<<<< HEAD
  @Input() cardName: string

  constructor() { }
=======
  constructor(private route: ActivatedRoute,
    private location: Location) { }
>>>>>>> 16f3354dc84cd18526fbecfa163e4e230ffb5f92

  ngOnInit() {
  }

}
