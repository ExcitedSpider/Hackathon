import { Component, OnInit } from '@angular/core';
import { Sidenav } from 'materialize-css'
import { SettingItem } from '../settings/setting-item'
import { EmitService } from '../emit.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  username: string;
  password: string;
  isLoggedIn: boolean = false;


  constructor( private location: Location, private emitService: EmitService) { }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    Sidenav.init(elems);
   
  }

}
