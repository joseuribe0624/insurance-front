//importar los modulos del router
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {HomeComponent } from './components/home/home.component';
import {LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

//array de rutas
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '**', component: LoginComponent},
];
//exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
