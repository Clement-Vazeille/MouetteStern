import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark " >
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
        <a class="navbar-item" routerLink="/bilanCarb">Bilan Carbone</a>
        <a class="navbar-item" routerLink="/billetterie">Billetterie</a>
      </div>
      </div>
    </div>

    
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
