import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model/hero.model';
import { Heroes } from './hero.model/heroArray';


@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {

  hero: Hero = {
     id: 1,
     name:"Shweta"
  } 
 heroes=Heroes ;
 selectedHero :Hero;

  constructor() { }

  ngOnInit() {
    
  }

  onSelect(hero){
    this.selectedHero=hero;
  }

}
