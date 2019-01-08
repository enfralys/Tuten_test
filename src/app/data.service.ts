
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from '@angular/router';
import { stringify } from '@angular/core/src/util';
import { headersToString } from 'selenium-webdriver/http';
import { Vista } from './vista';
import { VistaComponent } from './vista/vista.component';

   
@Injectable({
  providedIn: 'root'
})
export class DataService {
json: any;
token:String;
posts: Vista [];
tok : '';
  constructor(private http: HttpClient) { 
    console.log('service is running')
  


   
  }
  
  dato: Data;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'App' :'APP_BCK',
    'Password': '1234',
    'Accept':'application/json'
  });

 



   ObtenerToken(){
      
  
        return this.http.put<[]>('https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl',this.dato,{headers :this.headers})
      
     
    
        


}

  obtenerDatos(){

    this.ObtenerToken().subscribe(data=>{
    this .  tok= data['sessionTokenBck'];
  console.log(this.tok,"aqui funciono")
     })

    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'App' :'APP_BCK',
      'adminemail': 'testapis@tuten.cl',
      'Accept':'application/json',
      'token' : 'testapis@tuten.cl7pukibien7mjb6ie7q6dphgka5'
        })


  
  return this.http.get<[]>('https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true',{headers : headers})


  }

}
