import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RouterModule,
  Routes,
  ActivatedRoute,
  Router
} from '@angular/router'

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { ProductInfoComponent } from './product-info/product-info.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'product-info', component: ProductInfoComponent },
  { path: 'product', component: ProductComponent }
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