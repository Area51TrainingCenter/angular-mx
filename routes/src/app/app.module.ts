import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router'
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { P404Component } from './p404/p404.component';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contacto', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: P404Component },


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    P404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    AUTH_PROVIDERS
    //{ provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
