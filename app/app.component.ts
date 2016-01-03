import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero/hero';
import {HeroListComponent} from './hero/hero-list.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {HeroService} from './hero/hero.service';

//The selector specifies a simple CSS selector for a host HTML element named my-app.\
// Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element
// in the host HTML.
@Component({
  selector: 'my-app',
  template: `<h1 class="title">{{title}}</h1>
             <my-hero-list></my-hero-list>
            `,
  directives: [HeroListComponent, HeroDetailComponent]
})

export class AppComponent {
  // add title property for application
  // add hero property for a hero
  public title = 'Component Router';
}
