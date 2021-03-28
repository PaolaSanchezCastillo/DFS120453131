import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {}

  constructor(private authService : AuthService, 
    private router : Router) { }

  ngOnInit(): void {

  }

  login(){
    this.authService.loginUsuario(this.user).subscribe(
res => {
  console.log(res); 
  localStorage.setItem('token', res.token); 
  this.router.navigate(['/cervezas']); 
}, 
error => console.log(error)
     ) }
   

}
