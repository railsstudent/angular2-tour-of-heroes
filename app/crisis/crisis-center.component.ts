import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';

@Component({
  selector: 'crisis-center',
  template: `<h1>CRISIS CENTER</h1>
            <router-outlet></router-outlet>
            `,
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true },
  { path: '/:id', name: 'CrisisDetail', component: CrisisDetailComponent },
  { path: '/list/:id', name: 'CrisisList', component: CrisisListComponent }
])
export class CrisisCenterComponent {

}
