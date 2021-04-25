import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { FavBeerComponent } from './components//fav-beer/fav-beer.component';
import { LoginComponent } from './components//login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components//register/register.component';
import {Routes, RouterModule} from '@angular/router'
import {AppRoutingModule} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    FavBeerComponent,
    LoginComponent,
    RegisterComponent
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
