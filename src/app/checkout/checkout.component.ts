import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapPinSolid } from '@ng-icons/heroicons/solid';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { Order, Product } from '../app.model';
import { OrderStatusService } from '../services/order-status.service';
import { AuthService } from '../services/auth.service';
import { ToastComponent } from "../toast/toast.component";





@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgIcon, CurrencyPipe, ToastComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  viewProviders:[provideIcons({heroMapPinSolid })]
})
export class CheckoutComponent implements OnInit{

  totalAmount: number = 0;
  private orderService = inject(OrderService);
  private productService = inject(ProductService)
  private orderStatusService = inject(OrderStatusService)
  private authService = inject(AuthService)
  private router = inject(Router)

  @ViewChild(ToastComponent) toast!: ToastComponent;

  isOnTheWayChecked = false;
  constructor(private cartService: CartService) {}

  cartItems: Product[] = [];

  ngOnInit(): void {
    // Retrieve the total amount from the CartService
    this.totalAmount = this.cartService.getTotalAmount();
    this.cartItems = this.productService.cart();
  }

  placeOrder() {

    const order : Order = {
      items: this.cartItems,
      date: new Date().toLocaleDateString(), // Add order date
      status : 'On the way'
    };

    // Add the order to OrderService
    this.orderService.addOrder(order);
    this.orderStatusService.updateOrderStatus(true);

    if (!this.authService.isLoggedInSignal()) { // Check if user is logged in
     // this.toastService.show('You must log in first.');
     this.toast.showToast('You must log in first.',true);
     return;
    }

    // Navigate to "My Orders" or a confirmation page after placing the order
    this.router.navigate(['user-profile/orders']);
  }

}
