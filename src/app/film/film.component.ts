import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  template: `
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">
  <div class="columns">
  <div class="column is-12">

  <figure class="image is-16by9">
  <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/nTHgbYOtl2M?si=xkA5xygGQyMMenuV" frameborder="0" allowfullscreen></iframe>
</figure>

  <section class="hero">
    <div class="hero-body">
  

                  <figure class="image">
                    <img src="assets/img/voix_off1.png" height="25" width="25">
                  </figure>
    <section class="hero is-small">
    <div class="hero-body">
    </div>
    </section>

                  <figure class="image">
                    <img src="assets/img/voix_off2.png" height="25" width="25">
                  </figure>
  </div>
  </section>


    
  </div>
  </div>
  </div>
  </section>
  `,
  styles: [
  ]
})
export class FilmComponent {

}
