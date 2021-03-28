import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})


export class CervezasService {
  private URL = 'http://localhost:3000/api'; 

  constructor(private http:HttpClient  ){ }


  getCervezas(){
    return this.http.get<any>(this.URL + '/cervezas'); 

  }
  
}
