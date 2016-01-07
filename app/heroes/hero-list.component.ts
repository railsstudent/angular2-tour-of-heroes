import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroFormComponent} from './hero-form.component';

@Component ({
  selector: 'my-hero-list',
  templateUrl: '../app/heroes/template/hero-list.html',
  styleUrls: [ '../app/heroes/css/heroStyle.css'],
  directives: [HeroFormComponent]
})

export class HeroListComponent implements OnInit {
  public heroes : Hero[];
  public selectedHero : Hero;

  constructor(private _router : Router,
    private _service: HeroService, routeParams: RouteParams) {

      let selectedId = routeParams.get('id');
      this.selectedHero = null;
      if (selectedId) {
        this._service.getHero(selectedId).then(hero => this.selectedHero = hero);
      }
  }

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    // route to hero component
    this._router.navigate(['HeroDetail', {id : hero.id }]);
  }
}
