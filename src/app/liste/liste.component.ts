import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  template: `
  <section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">



      <div class="tile is-ancestor is-vertical">

      <div class="tile">

      <div class="tile is-parent">
        <article class="tile is-child notification is-$orange">
          <p class="title">Prez</p>
          <p class="subtitle">Arthur</p>
          <figure class="image is-4by3">
            <img src="assets/img/arthur.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Vice Prez</p>
          <p class="subtitle">Benjamin</p>
          <figure class="image is-4by3">
            <img src="assets/img/benji.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Vice Prez</p>
          <p class="subtitle">Samuel</p>
          <figure class="image is-4by3">
            <img src="assets/img/samu.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Trez</p>
          <p class="subtitle">Maël</p>
          <figure class="image is-4by3">
            <img src="assets/img/mael.png">
          </figure>
        </article>
      </div>
      </div>

      <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Trez</p>
          <p class="subtitle">Louis</p>
          <figure class="image is-4by3">
            <img src="assets/img/louis.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">SecGen</p>
          <p class="subtitle">Théo</p>
          <figure class="image is-4by3">
            <img src="assets/img/theo.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Respo DSI</p>
          <p class="subtitle">Clément</p>
          <figure class="image is-4by3">
            <img src="assets/img/clem.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Respo Event</p>
          <p class="subtitle">Louis</p>
          <figure class="image is-4by3">
            <img src="assets/img/Louis-Event.png">
          </figure>
        </article>
      </div>
      </div>

      <div class="tile">

      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Sec écolo</p>
          <p class="subtitle">Abdelhamid</p>
          <figure class="image is-4by3">
            <img src="assets/img/abdel.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Respo COM</p>
          <p class="subtitle">Aurélien</p>
          <figure class="image is-4by3">
            <img src="assets/img/aure.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Respo film</p>
          <p class="subtitle">Diégo</p>
          <figure class="image is-4by3">
            <img src="assets/img/diego.png">
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Respo Sensi</p>
          <p class="subtitle">Timothée</p>
          <figure class="image is-4by3">
            <img src="assets/img/timot.png">
          </figure>
        </article>
      </div>
      </div>

    </div>
    
    


    
  </div>
  </section>
  `,
  styles: [`
  .hero{
    background-image: url('/assets/img/Mouette_Dezoom2.png') !important;
    background-size: cover;
    background-position: center center;
   }`
  ]
})
export class ListeComponent {

}
