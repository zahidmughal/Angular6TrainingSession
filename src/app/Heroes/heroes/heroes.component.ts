import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `<app-hero-list></app-hero-list>`
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
