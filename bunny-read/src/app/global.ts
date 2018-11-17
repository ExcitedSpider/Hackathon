import { SettingItem } from './settings/setting-item'
import { Card } from './card'
var settings: SettingItem[] = [
    new SettingItem("privacy", "隐私", true),
    new SettingItem("deletion", "删除", true),
    new SettingItem("", "冻结"),
    new SettingItem("", "包括但不限于"),
    new SettingItem("", "账号"),
    new SettingItem("", "注销"),
    new SettingItem("", "撤销"),
    new SettingItem("", "财产"),
  ];

var globalCards: Card[] = [];

var html: string;
function setHtml(h) {
    html = h;
}
export  { settings, globalCards, html, setHtml };