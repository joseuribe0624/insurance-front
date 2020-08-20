import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { InsuranceService } from '../../../services/insurance.service';
import { Policy } from '../../../models/policy';
import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list-expired',
  templateUrl: './list-expired.component.html',
  styleUrls: ['./list-expired.component.css'],
  providers: [InsuranceService, UserService]

})
export class ListExpiredComponent implements OnInit {
  public insurances: Array<Policy>;
  public page_title:string;
  public userId;
  public identity;
  public token;
  public month:String;
  public year:String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _insuranceService : InsuranceService,
    private _userService : UserService,
  ) {
    this.year = '';
    this.month = '';
    this.identity = _userService.getIdentity();
    this.page_title = "Polizas Proximas a Vencer";
    this.identity = this._userService.getIdentity();
    this.userId = this.identity._id;
    this.token =  this._userService.getToken();
  }

  ngOnInit(): void {

  }

  getNextExp(date){
    this._route.params.subscribe(params => {
      this._insuranceService.getInsuranceExpired(this.token, this.userId, date ).subscribe(
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

  getInsurance(){
    var date = this.year+"-"+this.month;
    this.getNextExp(date);
  }


}
