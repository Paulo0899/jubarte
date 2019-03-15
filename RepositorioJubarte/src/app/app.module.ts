import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,

    SidebarComponentComponent
  ],
  imports: [
    BrowserModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
