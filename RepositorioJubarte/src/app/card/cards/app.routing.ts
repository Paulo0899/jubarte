import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TesteComponent } from 'src/app/teste/teste.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CriarContaLoginComponent } from 'src/app/criar-conta-login/criar-conta-login.component';


const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teste', component: TesteComponent},
  {path: 'conta-login', component: CriarContaLoginComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
