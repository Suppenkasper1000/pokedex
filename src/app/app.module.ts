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
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';




const appRoutes: Routes = [
  { path: 'poke', component: PokeComponent },
  { path: 'about',      component: AboutComponent },
  { path: '',
    redirectTo: '/poke',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokeComponent,
    CapitalizePipe,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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
