import { ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { TesteComponent } from 'src/app/teste/teste.component';


const APP_ROUTES: Routes = [
  {path:'teste',component:TesteComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
