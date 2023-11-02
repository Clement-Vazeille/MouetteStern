import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark " >
      <!-- logo -->
      <div class="navbar-brand" >
        <a class="navbar-item" routerLink="/">
          <img src="assets/img/MouetteStern_Coeur.png">
        </a>
      </div>
      
      <!-- menu -->
      <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="/">Saloon</a>
        <a class="navbar-item" routerLink="/allos">Allos</a>
        <a class="navbar-item" routerLink="/liste">Liste</a>
      </div>
      </div>
    </div>

    
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
