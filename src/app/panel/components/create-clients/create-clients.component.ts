import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css'],
  providers: [UserService, ClientService]
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
    console.log(this._clientService.prueba);
  }

  onSubmit(form){
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
