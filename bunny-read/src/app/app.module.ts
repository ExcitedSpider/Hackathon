import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    ContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
