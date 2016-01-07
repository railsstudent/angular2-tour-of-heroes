import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Message} from '../message';

@Component({
  selector: 'my-hero-form',
  templateUrl: '../app/heroes/template/hero-form.html'
})
export class HeroFormComponent {

  public newHero: Hero;
  public message: Message;

  constructor(private _service: HeroService) {
    this.newHero = {'id': 0, 'name': ""};
  }

  onSubmit() {
    this.message = null;
    this._service.addHero(this.newHero)
      .then(message => {
        this.message = message;
        this.newHero.id = 0;
        this.newHero.name = '';
      });
  }

  get diagnostic() { return JSON.stringify(this.newHero); }
}
