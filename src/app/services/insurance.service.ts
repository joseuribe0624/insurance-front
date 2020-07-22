import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';


@Injectable()
export class InsuranceService{
  public url : string;

  constructor(
    private _http: HttpClient
  ){
    this.url = global.url
  }

  addPolicy(token,policy, clientId): Observable<any> {
    let params = JSON.stringify(policy);
    let headers = new HttpHeaders().set('Content-type', 'application/json')
                                   .set('Authorization', token);
    return this._http.post(this.url+'create_policy/'+clientId, params, {headers: headers});
  }

  getInsuranceByClient(token,clientId): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                  .set('Authorization', token);

    return this._http.get(this.url+'get_policies/'+clientId, {headers:headers});
  }
}
