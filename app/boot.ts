import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HeroService} from './hero/hero.service';


//We need two things to launch the application:
// Angular's browser bootstrap function
// The application root component that we just wrote.
bootstrap(AppComponent, [ HeroService ]);
