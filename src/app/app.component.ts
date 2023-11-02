import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <!-- header -->
    <app-header></app-header>
    
    <router-outlet></router-outlet>

    <!-- footer  actuellement il n'y en a pas
    <app-footer></app-footer>-->
  `,
  styles: []
})
export class AppComponent {
  title = 'MouetteStern';
}
