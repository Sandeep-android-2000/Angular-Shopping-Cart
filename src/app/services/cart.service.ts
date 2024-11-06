import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private totalAmount: number = 0;

  constructor() {}

  setTotalAmount(amount: number) {
    this.totalAmount = amount;
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }


}
