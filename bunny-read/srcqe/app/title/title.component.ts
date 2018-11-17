import { Component, OnInit } from '@angular/core';
import { Sidenav } from 'materialize-css'
import { SettingItem } from '../settings/setting-item'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  username: string;
  password: string;
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    Sidenav.init(elems);
  }

}
