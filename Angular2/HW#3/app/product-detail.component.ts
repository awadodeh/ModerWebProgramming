import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-product-detail',
   template: `
       <div *ngIf="selectedProduct
    ">
      <h2>{{selectedProduct
      .name}} details!</h2>
      <div><label>id: </label>{{selectedProduct
      .id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedProduct
        .name" placeholder="name"/>
      </div>
    </div>
  `
})


export class ProductDetailComponent {
}