import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { CardModule } from './card/card.module';
import { TesteComponent } from './teste/teste.component';
import { routing } from './card/cards/app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,

    SidebarComponentComponent,

    TesteComponent,

    HomeComponent
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
