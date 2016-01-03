import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector : 'my-hero-detail',
  templateUrl: './app/hero/template/hero-detail.html'
})

export class HeroDetailComponent {
  public hero: Hero;

//  constructor(private _heroService: HeroService) { }

  gotoHeroes() {
    
  }
}
