import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { CardModule } from './card/card.module';
import { TesteComponent } from './teste/teste.component';
import { routing } from './card/cards/app.routing';
import { HomeComponent } from './home/home.component';
import { CriarContaLoginComponent } from './criar-conta-login/criar-conta-login.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,

    SidebarComponentComponent,

    TesteComponent,

    HomeComponent,

    CriarContaLoginComponent,

    CriarContaComponent,


  ],
  imports: [
    BrowserModule,
    CardModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
