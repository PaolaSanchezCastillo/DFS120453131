import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre = 'Paola';
  edad = 21; 
  email = 'paola@mail.com';
  activo = true; 
  ventas  = [1200, 500, 400, 30];

  isActive(){
    if(this.activo)
    return 'Esta activo'
    else
    return 'No esta activo'
  
  }

}
