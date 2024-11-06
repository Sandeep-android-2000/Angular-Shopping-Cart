import { Component, Input, inject, ViewChild } from '@angular/core';
import { Product } from '../../app.model';
import { CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ToastComponent } from '../../toast/toast.component';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl:'./product-card.component.css',
  imports: [CurrencyPipe, TitleCasePipe, RouterLink, ToastComponent,NgClass],
  standalone:true
})
export class ProductCardComponent {
  
  @Input() product!: Product;
  @ViewChild(ToastComponent) toast!: ToastComponent;
  
  private productService = inject(ProductService)
  isInCart:boolean = false;
  quantity: number = 1;
  
  addToCart(product : Product) {

    this.productService.addToCart(product);
    this.toast.showToast('Product added to cart',false);
    this.isInCart = true
  }

  increaseQuantity(product:Product) {
    this.quantity++;
    this.productService.updateCartItemQuantity(product,this.quantity)
    this.toast.showToast('Product added to cart',false);
  }

  decreaseQuantity(product :Product,input:  HTMLInputElement) {


    const value = parseInt(input.value);

    if (value <= 1) {
      this.isInCart = false;
      this.productService.removeFromCart(product)
      this.productService.updateCartItemQuantity(product,this.quantity)
      this.toast.showToast('Product removed to cart',true);
    } 
    else {
      this.quantity--;
    }
    
    // this.isInCart=false
  }
}

