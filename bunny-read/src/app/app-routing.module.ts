import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component'
const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'content', component:  ContentComponent },
];

@NgModule({
  exports: [ RouterModule ],  
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}