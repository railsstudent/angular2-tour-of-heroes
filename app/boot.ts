import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {HeroService} from './heroes/hero.service';

//We need two things to launch the application:
// Angular's browser bootstrap function
// The application root component that we just wrote.
bootstrap(AppComponent, [ROUTER_PROVIDERS, HeroService]);
