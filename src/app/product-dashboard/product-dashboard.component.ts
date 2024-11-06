import { Component, inject, Input } from '@angular/core';
import { Product } from '../app.model';
import { ProductCardComponent } from './product-card/product-card.component';

import { SkeletonLoaderComponent } from "../skeleton-loader/skeleton-loader.component";
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  standalone: true,
  imports: [ProductCardComponent, SkeletonLoaderComponent]
})
export class ProductDashboardComponent {
  products : Product[] = []
  isLoading = true;
  private productService = inject(ProductService)

  constructor(){
    this.products = this.productService.getProducts();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); 
  }

  
 
   

 
}

