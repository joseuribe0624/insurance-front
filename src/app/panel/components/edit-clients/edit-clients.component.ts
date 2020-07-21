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
  selector: 'app-edit-clients',
  templateUrl: '../create-clients/create-clients.component.html',
  styleUrls: ['../create-clients/create-clients.component.css'],
  //templateUrl: '/edit-clients.component.html',
  //styleUrls: ['./edit-clients.component.css'],
  providers: [UserService, ClientService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class EditClientsComponent implements OnInit {
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
    this.page_title = 'Editar Cliente';
    this.identity = this._userService.getIdentity();
    this.token =  this._userService.getToken();
    this.client = new Client('','','','','','','','','','',this.identity._id);
   }

  ngOnInit() {
    this.getClient();
  }

  onSubmit(){

  }

  getClient(){
    var userId = this.identity._id;
    this._clientService.getClient(this.token, userId).subscribe(
      response => {
        if(!response.client){
          this._router.navigate(['/panel/listar-clientes'])
        }
        else{
          this.client = response.client;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
