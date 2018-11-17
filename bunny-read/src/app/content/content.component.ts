import { Component, OnInit } from '@angular/core';
import { Card } from '../card'
import { globalCards } from '../global'
import { ContentGetJsonService } from '../content-get-json.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cards: Card[] = globalCards;
  constructor(private contentGetJsonService: ContentGetJsonService) {
    this.contentGetJsonService = contentGetJsonService;
   }

  colors: string[] = ["pink",
    "deep-purple","indigo","blue","cyan","teal","green","deep-orange","brown","blue-grey"
  ];
  getColor(i) {
    return this.colors[i%9];
  }

  ngOnInit() {

  }

  getKeyWordName(): void {
    
  }
}
