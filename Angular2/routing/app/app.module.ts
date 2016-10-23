import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductCalculatePricePipe } from './product-calculate-price.pipe';
import { ProductsComponent } from './product.component';

RouterModule.forRoot([
  {
    path:'products',
    component: ProductsComponent
  }
])

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductCalculatePricePipe,
     ProductsComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }