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
    <h2 class="subtitle is-6">Classique : jambon, fromage à tartiner</h2>
    <h2 class="subtitle is-6">Spicy : poulet, poivron, sauce piquante</h2>
      <h2 class="subtitle is-6">Végé : poivron, carotte, oignon caramélisé</h2>
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
<h2 class="subtitle is-6">Envie d'affronter les cow-boyz ?</h2>
    <h2 class="subtitle is-6">Alors dégainez les manettes, parce qu'on ramène la Switch, avec Mar'Stern Kart et Super Smash Bros UltiMouette.</h2>
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
  <h2 class="subtitle is-6">Les crêpes des Mouettes :</h2>
      
      <h2 class="subtitle is-6">Crêpes chocolat</h2>
      
      <h2 class="subtitle is-6">Crêpes confiture</h2>
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
<h2 class="subtitle is-6">Envi d'un petit remontant après une traversée du désert ?</h2>
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
    <h2 class="subtitle is-6">Jeu d'alcool préféré des cowboys</h2>
    <h2 class="subtitle is-6">On arrive avec nos nerfs</h2>
    <h2 class="subtitle is-6">Préparez vous à devoir boire</h2>
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
    <img src="assets/img/Allo_Film.png" height="150" width="100">
  </figure>
</div>
<div class="card-content">

<div class="content">
<h2 class="subtitle is-6">Envi de regarder le meilleur film de liste ?</h2>
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
