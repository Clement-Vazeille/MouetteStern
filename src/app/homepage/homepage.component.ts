import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">
  </div>
  </section>
  `,
  styles: [`
  .hero{
    background-image: url('/assets/img/Mouette_Dezoom2.png') !important;
    background-size: cover;
    background-position: center center;
}
  `
  ]
})
export class HomepageComponent {

}
