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
    this.policy = new Policy('','',this.identity.email,'','','','','','',0,'','','','','','','','','','','','','','','','',0,'',0,'','','');
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    let birth_in;
    let policy_start;
    let policy_end;
    let soat_expiration;
    let rtm_expiration;
    birth_in = this.policy.birth_insured;
    this.policy.birth_insured = birth_in._i;
    policy_start = this.policy.policy_start;
    this.policy.policy_start = policy_start._i;
    policy_end = this.policy.policy_end;
    this.policy.policy_end = policy_end._i;
    soat_expiration = this.policy.soat_expiration;
    this.policy.soat_expiration = soat_expiration._i;
    rtm_expiration = this.policy.rtm_expiration;
    this.policy.rtm_expiration = rtm_expiration._i;

    this._route.params.subscribe(params => {
      let clientId = params['id'];
      this._insuranceService.addPolicy(this.token, this.policy, clientId).subscribe(
        response => {
          if(response.policy){
            this.status = 'success';
            this.policy = response.policy;
            this._router.navigate(['/panel/listar-seguros/clientId']);
          }else{
            this.status = 'error';
          }
        },
        error => {
          this.status = 'error';
          console.log(error);
        }
      );
    });
  }

}
