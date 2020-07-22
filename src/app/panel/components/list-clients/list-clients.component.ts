import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers: [UserService, ClientService]
})
export class ListClientsComponent implements OnInit {

  public page_title: string;
  public clients: Array<Client>;
  public identity;
  public token;
  //status para mostrar mensajes de error
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService,
    private _clientService : ClientService
  ){
  this.page_title = 'Listar Clientes';
  this.identity = this._userService.getIdentity();
  this.token =  this._userService.getToken();
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    var userId = this.identity._id;
    this._clientService.getClientByUser(this.token, userId).subscribe(
      response => {
        if(response.clients){
          this.clients = response.clients;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
