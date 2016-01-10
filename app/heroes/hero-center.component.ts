import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: '<hero-center></hero-center>',
  template: `
              <router-outlet></router-outlet>
            `,
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'Heroes', component: HeroListComponent, useAsDefault: true},
  {path: '/:id', name: 'HeroHighlight', component: HeroListComponent },
  {path: '/hero/:id/:dashboard', name: 'HeroDetail', component: HeroDetailComponent }
])
export class HeroCenterComponent {


}
