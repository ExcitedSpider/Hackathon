import { Component, OnInit, Input } from '@angular/core';
import { SettingItem } from './setting-item'
import {settings} from '../global'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  items: SettingItem[] = settings;

  clickItem(item: SettingItem) {
    item.selected = !item.selected;
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
