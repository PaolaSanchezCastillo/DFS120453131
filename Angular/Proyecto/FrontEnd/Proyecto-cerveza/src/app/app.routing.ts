import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from "./app.component"; 
import { NgModule } from '@angular/core'; //1
import {LoginComponent} from "./components/login/login.component"; 
import {RegisterComponent} from "./components/register/register.component"; 
import { BeerListComponent } from './components/beer-list/beer-list.component';
import {AuthGuardGuard} from './auth-guard.guard'; 

const appRoutes : Routes = [ //2
    {path: "", component: AppComponent, pathMatch: "full"}, 
    {path: "Login", component: LoginComponent, pathMatch: "full"}, 
    {path: "Registrarse", component: RegisterComponent, pathMatch: "full"}, 
    {path : "cervezas" , component:BeerListComponent,  canActivate: [AuthGuardGuard]}
    
];


@NgModule({ //3
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { //4

  }
