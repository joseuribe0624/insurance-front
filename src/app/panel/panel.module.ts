//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelRoutingModule } from './panel-routing.module';

//componentes
import { MainComponent } from './components/main/main.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { CreateInsuranceComponent } from './components/create-insurance/create-insurance.component';
import { EditInsuranceComponent } from './components/edit-insurance/edit-insurance.component';
import { ListInsuranceComponent } from './components/list-insurance/list-insurance.component';
import { ListExpiredComponent } from './components/list-expired/list-expired.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MotorComponent } from './components/motor/motor.component';
import { LifeComponent } from './components/life/life.component';
import { HealthComponent } from './components/health/health.component';
import { HomeComponent } from './components/home/home.component';
import { OthersComponent } from './components/others/others.component';
import { PymeComponent } from './components/pyme/pyme.component';


//servicios
//ng module
@NgModule({
  declarations: [
    MainComponent,
    ListClientsComponent,
    CreateClientsComponent,
    EditClientsComponent,
    CreateInsuranceComponent,
    EditInsuranceComponent,
    ListInsuranceComponent,
    ListExpiredComponent,
    MotorComponent,
    LifeComponent,
    HealthComponent,
    HomeComponent,
    OthersComponent,
    PymeComponent
  ],
  imports : [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PanelRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [
    MainComponent,
    ListClientsComponent,
    CreateClientsComponent,
    EditClientsComponent,
    CreateInsuranceComponent,
    EditInsuranceComponent,
    ListInsuranceComponent,
    ListExpiredComponent,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: []

})

export class PanelModule {}
