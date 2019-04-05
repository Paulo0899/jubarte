import { ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { TesteComponent } from 'src/app/teste/teste.component';
import { HomeComponent } from 'src/app/home/home.component';


const APP_ROUTES: Routes = [
  {path:'',component:HomeComponent},
  {path:'teste',component:TesteComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
