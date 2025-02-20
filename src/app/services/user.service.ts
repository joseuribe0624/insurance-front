import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {global} from './global';

@Injectable()
export class UserService{
  public url: string;
  public identity;
  public token;
  constructor(private _http: HttpClient){
    this.url = global.url;
  }

  register(user): Observable<any>{
    //convertir el objeto del usuario a un json string
    let params = JSON.stringify(user);
    //definir las cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //hacer peticion ajax
    return this._http.post(this.url + 'register', params, {headers: headers});
  }

  signup(user, gettoken = null): Observable<any>{
    //comprobar si llega el gettoken
    if(gettoken != null){
      user.gettoken = gettoken;
    }
    //convertir el objeto del usuario a un json string
    let params = JSON.stringify(user);
    //definir las cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //hacer peticion ajax
    return this._http.post(this.url + 'login', params, {headers: headers});
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity && identity != null && identity != undefined && identity != "undefined" ){
      this.identity = identity;
    }else {
      this.identity =  null;
    }
    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token && token != null && token != undefined && token != "undefined" ){
      this.token = token;
    }else {
      this.token =  null;
    }
    return this.token;
  }
}

