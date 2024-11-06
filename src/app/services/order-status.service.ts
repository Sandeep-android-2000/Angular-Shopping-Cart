import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  orderStatus = signal(false);

  // Method to update the order status signal
    updateOrderStatus(status: boolean) {
    this.orderStatus.set(status);
  }
}
