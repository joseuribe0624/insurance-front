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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    ListInsuranceComponent
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
