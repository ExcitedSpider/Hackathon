import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkedContentComponent } from './marked-content/marked-content.component';
import { SettingsComponent } from './settings/settings.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    ContentComponent,
    CardComponent,
    MarkedContentComponent,
    SettingsComponent,
    CommentComponent
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
