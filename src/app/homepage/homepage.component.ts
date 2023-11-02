import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">
    <p class="title">
      Site officiel des MouetteStern
    </p>
  </div>
  </section>
  `,
  styles: [`
  .hero{
    background-image: url('/assets/img/MouetteStern_Dos.png') !important;
    background-size: cover;
    background-position: center center;
}
  `
  ]
})
export class HomepageComponent {

}
