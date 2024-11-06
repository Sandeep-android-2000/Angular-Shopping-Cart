import { Injectable, signal } from '@angular/core';
import { Order } from '../app.model';

@Injectable({
  providedIn: 'root'
})


export class OrderService {

  private orders = signal<Order[]>([]);

  constructor() {}

  addOrder(newOrder: Order) {
    this.orders.update(order =>{ return [...order,newOrder]} );
  }

  getOrders() {
    return this.orders();
  }
}
