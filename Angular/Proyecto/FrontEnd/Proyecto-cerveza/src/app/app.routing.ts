import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from "./app.component"; 
import { NgModule } from '@angular/core'; //1
import {LoginComponent} from "./login/login.component"; 
import {RegisterComponent} from "./register/register.component"; 


const appRoutes : Routes = [ //2
    {path: "", component: AppComponent, pathMatch: "full"}, 
    {path: "Login", component: LoginComponent, pathMatch: "full"}, 
    {path: "Registrarse", component: RegisterComponent, pathMatch: "full"}
];


@NgModule({ //3
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { //4

  }
