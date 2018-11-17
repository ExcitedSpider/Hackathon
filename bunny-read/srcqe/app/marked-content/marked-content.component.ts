import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-marked-content',
  templateUrl: './marked-content.component.html',
  styleUrls: ['./marked-content.component.css']
})
export class MarkedContentComponent implements OnInit {
  url: string

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.url = this.location.path();
  }

}
