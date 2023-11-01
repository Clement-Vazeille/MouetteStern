import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Ici c'est le gang du MouetteStern 
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'MouetteStern';
}
