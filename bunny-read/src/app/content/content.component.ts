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
    this.getKeyWordName();
    //this.cardsName = ["隐私", "费用", "生活", "充值", "账户", "周期", "情感"]
  }

  getKeyWordName(): void {
    //this.contentGetJsonService.getMessage()
    //.subscribe(message => this.keyword = message.cards[0].keyword);
  }
}
