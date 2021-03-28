import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-beer',
  templateUrl: './fav-beer.component.html',
  styleUrls: ['./fav-beer.component.css']
})
export class FavBeerComponent implements OnInit {

  isActive: boolean = true;
  favBeerImg = 'https://images.punkapi.com/v2/177.png'; 
  imgHeight=  400; 
  imgWidth=  100; 

  constructor() { }

  ngOnInit(): void {
  }

}
