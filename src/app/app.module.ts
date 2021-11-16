import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LandingComponent } from './landing/landing.component';

import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuLatEsqComponent } from './menu-lat-esq/menu-lat-esq.component';
import { MenuLateralDirComponent } from './menu-lateral-dir/menu-lateral-dir.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreNosComponent,
    LandingComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    MenuLatEsqComponent,
    MenuLateralDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
