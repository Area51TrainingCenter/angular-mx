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
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';


import { ExampleDef } from './example.model';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuValidationComponent } from './form-sku-validation/form-sku-validation.component';


// Master list

export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'Form SKU', name: 'sku', path: 'sku', component: FormSkuComponent },
  { label: 'Form Validation', name: 'validation', path: 'validation', component: FormSkuValidationComponent }
]

//Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'sku', component: FormSkuComponent, pathMatch: 'full' },
  { path: 'validation', component: FormSkuValidationComponent, pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    FormSkuComponent,
    FormSkuValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    //RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
