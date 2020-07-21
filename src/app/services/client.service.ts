import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';


@Injectable()
export class ClientService{
  public url : string;

  constructor(
    private _http: HttpClient
  ){
    this.url = global.url
  }

  addClient(token,client): Observable<any> {
    let params = JSON.stringify(client);
    let headers = new HttpHeaders().set('Content-type', 'application/json')
                                   .set('Authorization', token);
    return this._http.post(this.url+'create_client',params, {headers: headers});
  }

  getClientByUser(token,userId): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                  .set('Authorization', token);

    return this._http.get(this.url+'get_clients/'+userId, {headers:headers});
  }

  getClient(token,userId): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                  .set('Authorization', token);

    return this._http.get(this.url+'get_client/'+userId, {headers:headers});
  }



}
