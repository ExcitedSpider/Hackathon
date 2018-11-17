import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { MarkedContentComponent } from './marked-content/marked-content.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'content', component:  ContentComponent },
  { path: 'marked-content', component: MarkedContentComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  exports: [ RouterModule ],  
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}