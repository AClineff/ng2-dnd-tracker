import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { AddCharacterComponent } from './add-character/add-character.component';

import {MaterialModule} from '@angular/material';
import { CharacterListService } from "./character-list.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayAreaComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [AddCharacterComponent],
  providers: [CharacterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
