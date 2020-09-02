import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { CreateInsuranceComponent } from './components/create-insurance/create-insurance.component';
import { EditInsuranceComponent } from './components/edit-insurance/edit-insurance.component';
import { ListInsuranceComponent } from './components/list-insurance/list-insurance.component';
import { ListExpiredComponent } from './components/list-expired/list-expired.component';
import { MotorComponent } from './components/motor/motor.component';

import { HealthComponent } from './components/health/health.component';
import { HomeComponent } from './components/home/home.component';
import { LifeComponent } from './components/life/life.component';
import { PymeComponent } from './components/pyme/pyme.component';
import { OthersComponent } from './components/others/others.component';

import { MainComponent } from './components/main/main.component';

const panelRoutes: Routes = [
  {
    path: 'panel',
    component : MainComponent,
    children : [
      { path: '', component: ListClientsComponent },
      { path: 'listar-clientes', component: ListClientsComponent },
      { path: 'crear-cliente', component: CreateClientsComponent },
      { path: 'editar-cliente/:id', component: EditClientsComponent },
      { path: 'listar-seguros/:id', component: ListInsuranceComponent },
      { path: 'crear-seguro/:id/:type', component: CreateInsuranceComponent },
      { path: 'editar-seguro/:id', component: EditInsuranceComponent },
      { path: 'listar-vencer', component: ListExpiredComponent },
      { path: 'vehiculos/:id', component: MotorComponent },
      { path: 'vida/:id', component: LifeComponent },
      { path: 'hogar/:id', component: HomeComponent },
      { path: 'salud/:id', component: HealthComponent },
      { path: 'pymes/:id', component: PymeComponent },
      { path: 'otros/:id', component: OthersComponent },

    ]
  }
]

@NgModule({

  imports:[
    RouterModule.forChild(panelRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class PanelRoutingModule {}
