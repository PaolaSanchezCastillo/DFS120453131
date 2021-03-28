import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  beers = [
    {
      imagen: "https://images.punkapi.com/v2/177.png", 
      nombre: "BrewDog Punk",
      precio: 5,
      descripcion:  "Refrescante, llena de sabor, es el tributo a una IPA clásica con un toque de lúpulo frutal que te llevan a una explosión de sabores tropicales con un final amargo."

    }, 
    {
      imagen: "https://images.punkapi.com/v2/129.png", 
      nombre: "Sin Nombre",
      precio: 5,
      descripcion:  "Refrescante, llena de sabor, es el tributo a una IPA clásica con un toque de lúpulo frutal que te llevan a una explosión de sabores tropicales con un final amargo."

    }, 
    {
      imagen: "https://images.punkapi.com/v2/127.png", 
      nombre: "Galak",
      precio: 10,
      descripcion:  "Refrescante, llena de sabor, es el tributo a una IPA clásica con un toque de lúpulo frutal que te llevan a una explosión de sabores tropicales con un final amargo."

    }

    


  ]

}
