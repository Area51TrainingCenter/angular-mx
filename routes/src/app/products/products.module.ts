import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router'

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { ProductInfoComponent } from './product-info/product-info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'product-info', component: ProductInfoComponent },
  { path: ':id', component: ProductComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    MainComponent,
    ProductInfoComponent
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    MainComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ProductsModule { }