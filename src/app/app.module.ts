import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LandingComponent } from './landing/landing.component';
import { EntrarComponent } from './entrar/entrar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreNosComponent,
    LandingComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
