import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component ({
  selector: 'my-hero-list',
  templateUrl: '../app/heroes/template/hero-list.html',
  styleUrls: [ '../app/heroes/css/heroStyle.css']
})

export class HeroListComponent implements OnInit {
  public heroes : Hero[];
  public selectedHero : Hero;

  constructor(private _router : Router,
    private _service: HeroService) {

  }

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    // route to hero component
    this._router.navigate(['HeroDetail', {id : hero.id }]);
  }
}
