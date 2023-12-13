import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeComponent } from './liste/liste.component';
import { AllosComponent } from './allos/allos.component';
import { BilanCarboneComponent } from './bilan-carbone/bilan-carbone.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "liste",
    component: ListeComponent
  },
  {
    path: "allos",
    component: AllosComponent
  },
  {
    path: "bilanCarb",
    component: BilanCarboneComponent
  },
  {
    path: "billetterie",
    component: BilletterieComponent
  },
  {
    path: "film",
    component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
