import { SettingItem } from './settings/setting-item'
import { Card } from './card'
var settings: SettingItem[] = [
    new SettingItem("privacy", "隐私"),
    new SettingItem("deletion", "删除"),
    new SettingItem("deletion", "删除"),
    new SettingItem("deletion", "删除"),
    new SettingItem("deletion", "删除"),
    new SettingItem("deletion", "删除"),
  ];

var cards: Card[] = [];

var html: string = "";
export  { settings, cards, html };