import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { NgClass } from '@angular/common';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports:[RouterLink,NgClass]
})
export class NavbarComponent {

  private productService = inject(ProductService)
  NoOfItemsInCart = signal(0);
    // Track login state

  private authService = inject(AuthService);
  isLoggedIn = this.authService.isLoggedInSignal;
  constructor() {
    // Update the signal based on the cart length in ProductService
    effect(() => {
      const cartLength = this.productService.getCartLength();
      this.NoOfItemsInCart.set(cartLength);
    }, { allowSignalWrites: true }); // Allow signal writes within this effect
  }





}

