import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';
import { MAT_DATE_FORMATS ,MAT_DATE_LOCALE, DateAdapter} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css'],
  providers: [UserService, ClientService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class CreateClientsComponent implements OnInit {
  public page_title: string;
  public client: Client;
  public identity;
  public token;
  //status para mostrar mensajes de error
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService,
    private _clientService : ClientService
  ) {
    this.page_title = 'Crear nuevo cliente';
    this.identity = this._userService.getIdentity();
    this.token =  this._userService.getToken();
    this.client = new Client('','','','','','','','','','',this.identity._id);
   }

  ngOnInit(): void {

  }

  onSubmit(form){
    var dateBirth;
    dateBirth = this.client.birth_client;
    this.client.birth_client = dateBirth._i;
    this._clientService.addClient(this.token, this.client).subscribe(
      response => {
        if(response.client){
          this.status = 'success';
          this.client = response.client;
          this._router.navigate(['/panel']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

}
