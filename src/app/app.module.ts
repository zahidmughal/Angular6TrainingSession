import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './Heroes/heroes/heroes.component';
import { HeroListComponent } from './Heroes/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
