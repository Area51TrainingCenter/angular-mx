import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';
import { NgIfComponent } from './ng-if/ng-if.component';


import { ExampleDef } from './example.model';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';


// Master list

export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'ngIf', name: 'ngif', path: 'ng-if', component: NgIfComponent },
  { label: 'ngSwitch', name: 'ngswitch', path: 'ng-switch', component: NgSwitchComponent },
  { label: 'ngStyle', name: 'ngstyle', path: 'ng-style', component: NgStyleComponent },
  { label: 'ngClass', name: 'ngclass', path: 'ng-class', component: NgClassComponent }
]

//Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'ng-if', component: NgIfComponent, pathMatch: 'full' },
  { path: 'ng-switch', component: NgSwitchComponent, pathMatch: 'full' },
  { path: 'ng-style', component: NgStyleComponent, pathMatch: 'full' },
  { path: 'ng-class', component: NgClassComponent, pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
