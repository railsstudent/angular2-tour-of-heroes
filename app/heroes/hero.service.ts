import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {Message} from '../message';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }

  getHero(id : number | string) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(h => h.id === id)[0]) ;
  }

  addHero(hero: Hero) {
    HEROES.push({'id' : 11 + HEROES.length, 'name' : hero.name});
    let message : Message =
      new Message('New hero is added successfully', 'alert alert-success');
    return Promise.resolve(message);
  }
}
