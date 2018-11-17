import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { cards } from '../global'
import { TokenInterface, CardInterface, MessageInterface, URLKEYWORDInterface } from '../content-get-json.service'
import { HttpClient } from 'selenium-webdriver/http';
import { ContentComponent } from '../content/content.component';
import { ContentGetJsonService } from '../content-get-json.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  url: string;
  keywords: string[];
  mess: MessageInterface;
   
  constructor(private contentGetJsonService: ContentGetJsonService) { }

  ngOnInit() { }

  commitUrl() {
    
    this.contentGetJsonService.getMessage()
    .subscribe(data => this.mess=data)
    for(let _card of this.mess.cards) {
      for(let _token of _card.tokens) {
        cards.push(new Card(_card.keyword, _token.id, _token.sentence));
      }
    }
  }
}
