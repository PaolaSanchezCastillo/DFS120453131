import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'; 
import {catchError, map} from 'rxjs/operators'; 

import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri: string  = 'htpp://3000/api'; 
  headers = new HttpHeaders().set('Content-Type', 'aplication/json'); 

  constructor( private http : HttpClient) {
   }

   //create
   createUsuario(data :any): Observable<any> {
     let url = `${this.baseUri}/create`; 
     return this.http.post(url, data)
     .pipe(
       catchError(this.errorMsg)
     )
   }

   getUsuarios(){
     return this.http.get(`${this.baseUri}`); 
   }

   getUsuario(id : any): Observable<any> { 
    let url = `${this.baseUri}/read/${id}`; 
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res : any) =>{
        return res || {}
      }), 
      catchError(this.errorMsg)
    )

   }

    updateUsuario(id: any, data: any){
      let url = `${this.baseUri}/update/${id}`; 
      return this.http.put(url, data, {headers: this.headers}).pipe(
        catchError(this.errorMsg)
      )
    }


    deleteUsuario(id: any){
      let url = `${this.baseUri}/delete/${id}`; 
      return this.http.delete(url, {headers: this.headers}).pipe(
        catchError(this.errorMsg)
      )
    }


   errorMsg(error : HttpErrorResponse){
     let errorMessage = ''; 
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message; 
    }else{
      errorMessage = `Error Code: ${error.status}\n Message : $(error.message)`; 

    }  
      console.log(errorMessage); 
      return throwError(errorMessage); 
  }


}
