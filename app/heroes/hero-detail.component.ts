import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector : 'my-hero-detail',
  templateUrl: './app/heroes/template/hero-detail.html'
})

export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private _router: Router,
    private _routeParams : RouteParams,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    let id = this._routeParams.get['id'];
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  gotoHeroes() {
     // <a [routerLink]="['Heroes']">Heroes</a>
    this._router.navigate(['Heroes']);
  }
}
