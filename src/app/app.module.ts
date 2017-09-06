import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PokeComponent} from "./poke/poke.component";
import {PokedexService} from "./api/pokedex.service";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { CapitalizePipe } from './poke/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
