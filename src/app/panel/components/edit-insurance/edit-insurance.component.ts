import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Policy } from '../../../models/policy';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';
import { MAT_DATE_FORMATS ,MAT_DATE_LOCALE, DateAdapter} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { InsuranceService } from 'src/app/services/insurance.service';
import { Location } from '@angular/common';

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
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.css'],
  providers: [UserService, ClientService, InsuranceService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class EditInsuranceComponent implements OnInit {
  public page_title: string;
  public policy: Policy;
  public identity;
  public token;
  //status para mostrar mensajes de error
  public status;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService,
    private _insuranceService : InsuranceService,
    private location: Location
  ) {
    this.page_title = 'Editar poliza';
    this.identity = this._userService.getIdentity();
    this.token =  this._userService.getToken();
    this.policy = new Policy('','','','','','','','','','',0,'','','','','','','','','','','','','','','','',0,'',0,'','','');
  }

  ngOnInit(): void {
    this.getInsurance();
  }

  converterToObject(val):any{
    let date;
    date = new Date(val);
    return date;
  }

  converterToString(val):any{
    let con_date;
    con_date = val;
    con_date = con_date.toISOString();
    con_date = con_date.split("T");
    return con_date[0];
  }

  getInsurance(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._insuranceService.getInsurance(this.token, id).subscribe(
        response => {
          if(!response.policy){
            this._router.navigate(['/panel/listar-clientes'])
          }
          else{
            response.policy.birth_insured = this.converterToObject(response.policy.birth_insured);
            response.policy.policy_start = this.converterToObject(response.policy.policy_start);
            response.policy.policy_end = this.converterToObject(response.policy.policy_end);
            response.policy.soat_expiration = this.converterToObject(response.policy.soat_expiration);
            response.policy.rtm_expiration = this.converterToObject(response.policy.rtm_expiration);
            response.policy.update_date = this.converterToObject(response.policy.update_date);
            response.policy.issued = this.converterToObject(response.policy.issued);
            this.policy = response.policy;
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  onSubmit(form){
    var id = this.policy._id;
    this.policy.birth_insured = this.converterToString(this.policy.birth_insured);
    this.policy.policy_start = this.converterToString(this.policy.policy_start);
    this.policy.policy_end = this.converterToString(this.policy.policy_end);
    this.policy.soat_expiration = this.converterToString(this.policy.soat_expiration);
    this.policy.rtm_expiration = this.converterToString(this.policy.rtm_expiration);
    this.policy.update_date = this.converterToString(this.policy.update_date);
    this.policy.issued = this.converterToString(this.policy.issued);
    this._insuranceService.update(this.token, id, this.policy).subscribe(
      response => {
        console.log(response.policy);
        if(response.policy){
          console.log(response.policy);
          this.status = 'success';
          this.policy = response.policy;
        }
        else{
          console.log("error");
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

  deleteInsurance(){
    this._insuranceService.delete(this.token, this.policy._id).subscribe(
      response => {
        this.location.back();
      },
      error => {
        console.log(error);
      }
    );
  }

}
