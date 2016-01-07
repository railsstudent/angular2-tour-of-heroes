import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HeroListComponent} from './heroes/hero-list.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {CrisisCenterComponent} from './crisis/crisis-center.component';

//The selector specifies a simple CSS selector for a host HTML element named my-app.\
// Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element
// in the host HTML.
@Component({
  selector: 'my-app',
  template: `<h1 class="title">{{title}}</h1>
             <a [routerLink]="['CrisisCenter']">Crisis Center</a>
             <a [routerLink]="['Heroes']">Heroes</a>
             <router-outlet></router-outlet>
            `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    // crisis center child route
    {path: '/crisis-center/...', name: 'CrisisCenter',
            component: CrisisCenterComponent
          , useAsDefault: true },
    {path: '/heroes', name: 'Heroes', component: HeroListComponent},
    {path: '/heroes/:id', name: 'HeroHighlight', component: HeroListComponent},
    {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
  // add title property for application
  public title = 'Component Router';
}
