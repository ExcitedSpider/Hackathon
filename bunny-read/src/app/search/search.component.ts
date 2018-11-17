import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { settings } from '../global'
import { globalCards, html, setHtml } from '../global'
import { MessageInterface, URLKEYWORDInterface } from '../content-get-json.service'
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
  send: URLKEYWORDInterface;
  mess: MessageInterface;
  constructor(private contentGetJsonService: ContentGetJsonService) { }

  ngOnInit() { }

  commitUrl() {
    var keywords = settings.filter(s=>{
      return s.selected;
    }).map(s=>{
      return s.name;
    })
    var r = keywords.map(s=>{
      return s;
    })
    console.log(keywords)
    this.contentGetJsonService.sendMessage({
        "url": this.url,
        "keyWords": settings.filter(s=>{
          return s.selected;
        }).map(s=>{
          return s.name;
        })
    }).subscribe(data => {
        this.mess=data;
        console.log(this.mess);
        globalCards.length = 0;
        for(let _card of this.mess.cards) {
            for(let _token of _card.tokens) {
              globalCards.push(new Card(_card.keyword, _token.id, _token.sentence));
            }
            setHtml(this.mess.html);
          }
    })
   
  }
}
