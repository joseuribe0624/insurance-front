import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Policy } from '../../../models/policy';
import { InsuranceService } from '../../../services/insurance.service';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';


@Component({
  selector: 'app-list-insurance',
  templateUrl: './list-insurance.component.html',
  styleUrls: ['./list-insurance.component.css'],
  providers: [ InsuranceService, UserService, ClientService ]
})
export class ListInsuranceComponent implements OnInit {
  public page_title: string;
  public insurances: Array<Policy>;
  public clientId;
  public identity;
  public token;
  //status para mostrar mensajes de error
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService,
    private _clientService : ClientService,
    private _insuranceService : InsuranceService
  ){
  this.page_title = 'Listar Seguros Clientes';
  this.identity = this._userService.getIdentity();
  this.token =  this._userService.getToken();
  }

  ngOnInit(): void {
    this.getInsurances();
  }

  getInsurances(){

    this._route.params.subscribe(params => {
      this.clientId = params['id'];
      let id = params['id'];
      console.log(id);
      this._insuranceService.getInsuranceByClient(this.token, id).subscribe(
        response => {
          if(response.policies){
            this.insurances = response.policies;
          }
        },
        error => {
          console.log(error);
        }
      );

    });
  }

}
