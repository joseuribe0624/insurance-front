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

  prueba(){
    return "Hola mundo desde el Client service";
  }

  addClient(token,client): Observable<any> {
    let params = JSON.stringify(client);
    let headers = new HttpHeaders().set('Content-type', 'application/json')
                                   .set('Authorization', token);
    return this._http.post(this.url+'client',params, {headers: headers});
  }
}
