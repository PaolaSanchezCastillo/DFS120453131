import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string ; 
  password : string ;
  constructor() { }

  registrarse(){
    console.log(this.email); 
    console.log(this.password); 
  }

  ngOnInit(): void {
  }

}
