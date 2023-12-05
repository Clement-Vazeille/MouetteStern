import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark" >
      <!-- le logo -->
      <div class="navbar-brand" >
        <a class="navbar-item" routerLink="/">
          <img src="assets/img/MouetteStern_Coeur.png">
        </a>
      </div>
      
      <!-- le menu -->
      <div class="navbar-brand">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="/">Saloon</a>
        <a class="navbar-item" routerLink="/allos">Allos</a>
        <a class="navbar-item" routerLink="/liste">Trombi</a>
      </div>
      </div>
    </nav>

    
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
