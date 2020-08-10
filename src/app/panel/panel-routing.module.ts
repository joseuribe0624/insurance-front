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
      { path: 'crear-seguro/:id', component: CreateInsuranceComponent },
      { path: 'editar-seguro/:id', component: EditInsuranceComponent },
      { path: 'listar-vencer', component: ListExpiredComponent },
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
