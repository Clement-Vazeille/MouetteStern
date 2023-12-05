import { Component } from '@angular/core';

@Component({
  selector: 'app-allos',
  template: `
  <app-numero></app-numero>
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">

  <div class="columns">
  <div class="column is-6">

  <div class="card" radius = 100.25rem>
  <div class="card-image" height="200" width="200">
    <figure class="image is-square">
      <img src="assets/img/Allo_Wrap.png" height="150" width="100">
    </figure>
  </div>
  <div class="card-content">

    <div class="content">
      Wrap classique : jambon + fromage à tartiner
      <br>
      Wrap Spicy : poulet + poivron + sauce piquante
      <br>
      Wrap végé : poivron + carotte + oignon caramélisé
    </div>
  </div>
  </div>
  </div>


  <div class="column is-6">

  <div class="card" radius = 100.25rem>
  <div class="card-image" height="200" width="200">
    <figure class="image is-square">
      <img src="assets/img/Allo_Wrap.png" height="150" width="100">
    </figure>
  </div>
  <div class="card-content">

  <div class="content">
      2eme image
    </div>

  </div>
  </div>
</div>

  <div class="column is-6">

  <div class="card" radius = 100.25rem>
  <div class="card-image" height="200" width="200">
    <figure class="image is-square">
      <img src="assets/img/Allo_Wrap.png" height="150" width="100">
    </figure>
  </div>
  <div class="card-content">

    <div class="content">
      3eme image
    </div>
  </div>
  </div>
  </div>
  <div class="column is-6">

<div class="card" radius = 100.25rem>
<div class="card-image" height="200" width="200">
  <figure class="image is-square">
    <img src="assets/img/Allo_Wrap.png" height="150" width="100">
  </figure>
</div>
<div class="card-content">

<div class="content">
    4eme image
  </div>

</div>
</div>
</div>
<div class="column is-6">

<div class="card" radius = 100.25rem>
<div class="card-image" height="200" width="200">
  <figure class="image is-square">
    <img src="assets/img/Allo_Wrap.png" height="150" width="100">
  </figure>
</div>
<div class="card-content">

<div class="content">
    5eme image
  </div>

</div>
</div>
</div>

</div>


  </div>
  </section>
  `,
  styles: [`
  .hero{
    background-image: url('/assets/img/Mouette_Barman.png') !important;
    background-size: cover;
    background-position: center center;
}
  `
  ]
})
export class AllosComponent {

}
