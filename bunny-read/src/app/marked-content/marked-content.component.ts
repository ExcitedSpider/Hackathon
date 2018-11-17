import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { html } from '../global'
@Component({
  selector: 'app-marked-content',
  templateUrl: './marked-content.component.html',
  styleUrls: ['./marked-content.component.css']
})
export class MarkedContentComponent implements OnInit {
  url: string
  innerHtml: string = html

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    document.getElementById('inner').innerHTML = this.innerHtml;
    document.getElementById(this.route.snapshot.paramMap.get('anchor')).scrollIntoView();

    console.log(this.route.snapshot.paramMap.get('anchor'));
    // this.location.go(this.location.path()+"#"+this.route.snapshot.paramMap.get('anchor'))
  }

}
