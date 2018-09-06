import { Injectable } from '@angular/core';
import { HEROES } from '../Heroes/mock-hero'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes (){
    return HEROES;
  }

}
