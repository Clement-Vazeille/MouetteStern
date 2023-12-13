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
        <a class="navbar-item" routerLink="/">Saloon</a>
        <a class="navbar-item" routerLink="/allos">Allos</a>
        <a class="navbar-item" routerLink="/liste">Trombi</a>
        <a class="navbar-item" routerLink="/film">Film</a>
      </div>
    </nav>

    
  `,
  styles: [`
  .navbar{
    height: 3.5rem;
  }
  `
  ]
})
export class HeaderComponent {

}
