import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Client } from '../../../models/client';
import { Policy } from '../../../models/policy';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';
import { InsuranceService } from '../../../services/insurance.service';
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
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.component.html',
  styleUrls: ['./create-insurance.component.css'],
  providers: [UserService, ClientService, InsuranceService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class CreateInsuranceComponent implements OnInit {
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
    private _clientService : ClientService,
    private _insuranceService : InsuranceService
  ) {
    this.page_title = 'Crear nueva poliza';
    this.identity = this._userService.getIdentity();
    this.token =  this._userService.getToken();
    this.policy = new Policy('','',this.identity._id,this.identity.email,'','','','','','',0,'','','','','','','','','','','','','','','','',0,'',0,'','','');
   }

  ngOnInit(): void {
  }

  converter(val):any{
    let con_date;
    con_date = val;
    con_date = con_date.toISOString();
    con_date = con_date.split("T");
    return con_date[0];
  }

  onSubmit(form){
    this.policy.birth_insured = this.converter(this.policy.birth_insured);
    this.policy.policy_start = this.converter(this.policy.policy_start);
    this.policy.policy_end = this.converter(this.policy.policy_end);
    this.policy.soat_expiration = this.converter(this.policy.soat_expiration);
    this.policy.rtm_expiration = this.converter(this.policy.rtm_expiration);
    this.policy.update_date = this.converter(this.policy.update_date);
    this.policy.issued = this.converter(this.policy.issued);

    this._route.params.subscribe(params => {
      let clientId = params['id'];
      this._insuranceService.addPolicy(this.token, this.policy, clientId).subscribe(
        response => {
          if(response.policy){
            console.log(this.policy);
            console.log("si");
            this.status = 'success';
            this.policy = response.policy;
            this._router.navigate(['/panel/listar-seguros/'+clientId]);
          }else{
            console.log(this.policy);
            console.log("2");
            this.status = 'error';
          }
        },
        error => {
          console.log(this.policy);
          console.log("3");
          this.status = 'error';
          console.log(error);
        }
      );
    });
  }

}
