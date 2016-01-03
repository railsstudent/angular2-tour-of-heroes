import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component ({
  selector: 'my-hero-list',
  templateUrl: '../app/hero/hero-list.html',
  styleUrls: [ '../app/hero/heroStyle.css']
})

export class HeroListComponent implements OnInit {
  public heroes : Hero[];
  public selectedHero : Hero;

  constructor(private _service: HeroService) {

  }

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
