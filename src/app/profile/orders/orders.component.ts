import { Component, inject } from '@angular/core';
import { Order } from '../../app.model';
import {  RouterLink } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { OrderStatusService } from '../../services/order-status.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  
  orders: Order[] = [];
  searchQuery: string = '';
  private orderStatusService = inject(OrderStatusService)
  orderStatusSignal = this.orderStatusService.orderStatus;
  
  private orderService = inject(OrderService);
  // selectedStatuses: string[] = [];
  filteredOrders: Order[] = [];
  
  constructor(){
    this.orders = this.orderService.getOrders();
    this.filteredOrders = [...this.orders]
    
  }
  
  searchOrders(): void {
    // Implement search logic
  }


  onStatusChange(status: string,event: any) : void{
    if (event.target.checked) {
      this.filteredOrders = this.orders.filter(order => order.status === status);
    } else {
      this.filteredOrders = this.orders.filter(order => order.status !== status);
    }

     //console.log(this.filteredOrders)

  }

}
