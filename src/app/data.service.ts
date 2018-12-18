import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Vista } from './vista';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  json: any;
  posts: Vista[];
  tok: '';

  constructor(private http: HttpClient) { }

  dato: Data;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'App': 'APP_BCK',
    'Password': '1234',
    'Accept': 'application/json'
  });

  ObtenerToken() {
    return this.http.put <[]> ('https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl', this.dato, {
      headers: this.headers
    })
  }

  obtenerDatos() {
    this.ObtenerToken()
      .subscribe(data => {
      this.tok = data['sessionTokenBck'];
    })

    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'App': 'APP_BCK',
      'adminemail': 'testapis@tuten.cl',
      'Accept': 'application/json',
      'token': 'testapis@tuten.cln6polvd0423btaq0hs1rb1a9hm'
    })

    return this.http.get <[]> ('https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true', {
      headers: headers
    })


  }

}
