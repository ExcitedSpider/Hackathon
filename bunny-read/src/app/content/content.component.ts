import { Component, OnInit } from '@angular/core';
import { Card } from '../card'
import { globalCards } from '../global'
import { ContentGetJsonService } from '../content-get-json.service'
import { EmitService } from '../emit.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cards: Card[] = globalCards;
  welcomed: boolean = false;
  constructor(private contentGetJsonService: ContentGetJsonService, private emitService: EmitService) {
   }

  colors: string[] = ["pink",
    "deep-purple","indigo","blue","cyan","teal","green","deep-orange","brown","blue-grey"
  ];
  getColor(i) {
    return this.colors[i%9];
  }
  tryThis() {
    this.emitService.eventEmit.emit("tryThis");
  }
  ngOnInit() {
    
  }

  getKeyWordName(): void {
    
  }
}
