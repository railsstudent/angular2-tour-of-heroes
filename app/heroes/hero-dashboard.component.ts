import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-dashboard',
  templateUrl: '../app/heroes/template/hero-dashboard.html',
  styleUrls: ['../app/heroes/css/hero-dashboard.css']
})
export class HeroDashboardComponent implements OnInit {

  heroes: Hero[];

  constructor (private _router : Router, private _heroService: HeroService) {

  }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero : Hero) {
    this._router.navigate(['/Heroes/HeroDetail', { 'id' : hero.id, dashboard: 1 }]);
  }
}
