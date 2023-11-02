import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <!-- header -->
    <app-header></app-header>
    <app-liste></app-liste>
    <app-homepage></app-homepage>
    <!-- les trucs principaux sont ici -->
    <router-outlet></router-outlet>

    <!-- footer 
    <app-footer></app-footer>-->
  `,
  styles: []
})
export class AppComponent {
  title = 'MouetteStern';
}
