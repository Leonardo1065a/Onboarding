import { Component } from '@angular/core';
import { NavigationStart, Router, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onboarding';
  load: boolean = true;
  constructor(router: Router) {
    router.events.subscribe(event => {
      if(
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.load = false;
      } 
    });
  }
}
