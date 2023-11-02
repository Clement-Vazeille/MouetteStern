import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeComponent } from './liste/liste.component';
import { AllosComponent } from './allos/allos.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
