import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TesteComponent } from 'src/app/teste/teste.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CriarContaLoginComponent } from 'src/app/criar-conta-login/criar-conta-login.component';
import { CriarContaComponent } from 'src/app/criar-conta/criar-conta.component';


const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teste', component: TesteComponent},
  {path: 'conta-login', component: CriarContaLoginComponent},
  {path: 'conta-criar', component: CriarContaComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
