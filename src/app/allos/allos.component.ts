import { Component } from '@angular/core';

@Component({
  selector: 'app-allos',
  template: `
  <app-numero></app-numero>
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">

  <div class="columns">
  <div class="column is-4">

  <div class="card" radius = 100.25rem>
  <div class="card-image" height="200" width="200">
    <figure class="image is-square">
      <img src="assets/img/Allo_Wrap.png" height="150" width="100">
    </figure>
  </div>
  <div class="card-content">

    <div class="content">
      Wrap classique : jambon, fromage à tartiner
      <br>
      Wrap Spicy : poulet, poivron, sauce piquante
      <br>
      Wrap végé : poivron, carotte,  oignon caramélisé
    </div>
  </div>
  </div>

  <section class="hero">
    <div class="hero-body">
    </div>
  </section>

  <div class="card" radius = 100.25rem>
<div class="card-image" height="200" width="200">
  <figure class="image is-square">
    <img src="assets/img/Allo_Switch.png" height="150" width="100">
  </figure>
</div>
<div class="card-content">

<div class="content">
    Envie d'affronter les cow-boyz ?
    <br>
    Alors dégainez les manettes, parce qu'on ramène la Switch,
    avec Mar'Stern Kart et Super Smash Bros UltiMouette.
  </div>

</div>
</div>

  </div>


  <div class="column is-4">

  <div class="card" radius = 100.25rem>
  <div class="card-image" height="200" width="200">
    <figure class="image is-square">
      <img src="assets/img/Allo_Crepe.png" height="150" width="100">
    </figure>
  </div>
  <div class="card-content">

  <div class="content">
      Les crêpes des Mouettes :
      <br>
      Crêpes chocolat
      <br>
      Crêpes confiture
    </div>

  </div>
  </div>

  <section class="hero">
    <div class="hero-body">
    </div>
  </section>

  <div class="card" radius = 100.25rem>
<div class="card-image" height="200" width="200">
  <figure class="image is-square">
    <img src="assets/img/Allo_Saloon.png" height="150" width="100">
  </figure>
</div>
<div class="card-content">

<div class="content">
    Envi d'un petit remontant après une traversée du désert ?
  </div>

</div>
</div>


</div>

  <div class="column is-4">

  <div class="card" radius = 100.25rem>
  <div class="card-image" height="200" width="200">
    <figure class="image is-square">
      <img src="assets/img/Allo_Duel.png" height="150" width="100">
    </figure>
  </div>
  <div class="card-content">

    <div class="content">
      Jeu d'alcool préféré des cowboys
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
    background-image: url('/assets/img/Website_Background.png') !important;
    background-size: cover;
    background-position: center center;
}
.card {
    background-color: hsl(0, 0%, 91%);
}
  `
  ]
})
export class AllosComponent {

}
