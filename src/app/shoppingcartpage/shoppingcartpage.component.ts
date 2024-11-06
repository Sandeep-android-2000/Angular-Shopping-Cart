import { Component, EventEmitter, inject, Output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { Product } from '../app.model';
import {  Router, RouterLink } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-shoppingcartpage',
  standalone: true,
  imports: [FormsModule,NgFor,CurrencyPipe,RouterLink,NgClass,CheckoutComponent],
  templateUrl: './shoppingcartpage.component.html',
  styleUrl: './shoppingcartpage.component.css'
})
export class ShoppingcartpageComponent {


  private productService =  inject(ProductService)
  private cartService = inject(CartService)
  cartItems = this.productService.cart();  // Get the cart items from ProductService
  totalAmount: number = 0;
 

 // Get reference to the toast component

  private router = inject(Router)


  // Method to calculate the total cost
  getTotalCost() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  navigateToCheckOutPage() {
    const totalAmount = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    this.cartService.setTotalAmount(totalAmount);
    this.router.navigate(['checkout'])
  }

  removeItem(product: Product) {
    this.productService.removeFromCart(product);
    this.cartItems = this.cartItems.filter((item) => item.name !== product.name);
  }


    // Default value for quantity

  // Method to increase the quantity
  increaseQuantity(product:Product) {
    product.quantity++
    this.productService.updateCartItemQuantity(product,product.quantity)
  }

  // Method to decrease the quantity, but prevent it from going below 1
  decreaseQuantity(product :Product) {
    if(product.quantity > 1){
      product.quantity--;
      this.productService.updateCartItemQuantity(product,product.quantity)
    }else{
      this.productService.removeFromCart(product)
    }
  }

 

}
