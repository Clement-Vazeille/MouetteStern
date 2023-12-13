import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  template: `
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">
  <div class="columns">
  <div class="column is-12">

  <h1 class="title is-2">Trailer :</h1>
  <section class="hero is-small">
    <div class="hero-body">
    </div>
  </section>

  <figure class="image is-16by9">
  <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/nTHgbYOtl2M?si=xkA5xygGQyMMenuV" frameborder="0" allowfullscreen></iframe>
</figure>
<section class="hero is-small">
    <div class="hero-body">
    </div>
  </section>

<h2 class="title is-3">Nos voix off :</h2>
  <section class="hero is-small">
    <div class="hero-body">
  
  </div>
  </section>

  <figure class="image ">
  <img src="assets/img/voix_offs.png">
</figure>
    
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
