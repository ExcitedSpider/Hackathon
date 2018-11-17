import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { CommentComponent } from './comment/comment.component';
import { MarkedContentComponent } from './marked-content/marked-content.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'content', component:  ContentComponent },
  { path: 'marked-content/:anchor', component: MarkedContentComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'comment',component:CommentComponent}
];

@NgModule({
  exports: [ RouterModule ],  
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}