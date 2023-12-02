import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AllosComponent } from './allos/allos.component';
import { ListeComponent } from './liste/liste.component';
import { NumeroComponent } from './numero/numero.component';
import { BilanCarboneComponent } from './bilan-carbone/bilan-carbone.component';
import { BilletterieComponent } from './billetterie/billetterie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AllosComponent,
    ListeComponent,
    NumeroComponent,
    BilanCarboneComponent,
    BilletterieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
