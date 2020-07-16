import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { CreateInsuranceComponent } from './components/create-insurance/create-insurance.component';
import { EditInsuranceComponent } from './components/edit-insurance/edit-insurance.component';
import { ListInsuranceComponent } from './components/list-insurance/list-insurance.component';
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
      { path: 'listar-seguros', component: ListInsuranceComponent },
      { path: 'crear-seguro', component: CreateInsuranceComponent },
      { path: 'editar-seguro/:id', component: EditInsuranceComponent },
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
