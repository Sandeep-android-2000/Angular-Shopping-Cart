import { Component, computed, inject, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from "../not-found/not-found.component";

import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-details.component.html',
  styleUrl:'./product-details.component.css',
  standalone: true,
  imports: [FormsModule, NotFoundComponent, CurrencyPipe, ToastComponent, NgFor, NgIf]
})
export class ProductDetailsComponent {


  @ViewChild(ToastComponent) toast!: ToastComponent;
  @Input({ required: true }) productId!: string
 
  private productService = inject(ProductService)
  productName : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.name
  )
  productBrand :any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.brand
  )
  productImage : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.image
  )
  productPrice : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.price
  )
  productQuantity : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.quantity
  )
  productRating : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.rating
  )
  productCategory : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.category
  )
  productVariety : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)?.variety
  )
  productItem : any = computed(() => 
    this.productService.products().find(product => product.id === this.productId)
  )
  Math = Math;

  addToCart() {
    this.productService.addToCart({
      id : this.productId,
      name: this.productName(),
      brand:this.productBrand(),
      price:this.productPrice(),
      image:this.productImage(),
      quantity:this.productQuantity(),
      rating:this.productRating(),
      category:this.productCategory(),
      variety:this.productVariety()
    })
    this.toast.showToast('Product added to cart',false);
    console.log(this.productItem())
    
  }


}

