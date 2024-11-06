import { Injectable, signal } from '@angular/core';
import { Product } from '../app.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
   products = signal< Product[]>([{
    id: '1',
    name: "Boat Rockerz 450",
    price: 1250,
    image: "headphones.jpg",
    quantity: 5,
    brand: "Boat",
    category: "Headphones",
    rating: 4.5,  // Star rating
    variety: [
      'Black | Wired',
      'Red | Wireless',
      'Blue | Wireless + Mic'
    ]
  },
  {
    id: '2',
    name: "Sony Bravia X900H 65-inch 4K TV",
    price: 99999,
    image: "4kmonitor.jpg",
    quantity: 18,
    brand: "Sony",
    category: "4K Monitor",
    rating: 4.7,
    variety: [
      '43-Inch | 60Hz',
      '50-Inch | 120Hz',
      '65-Inch | 144Hz'
    ]
  },
  {
    id: '3',
    name: "Apple Watch Series 8",
    price: 39999,
    image: "smartwatch.jpg",
    quantity: 2,
    brand: "Apple",
    category: "Smartwatch",
    rating: 4.8,
    variety: [
      '41mm | GPS',
      '45mm | GPS + Cellular'
    ]
  },
  {
    id: '4',
    name: "Nvidia Shield Gaming Mouse",
    price: 4999,
    image: "gamingmouse.jpg",
    quantity: 3,
    brand: "Nvidia",
    category: "Gaming Mouse",
    rating: 4.6,
    variety: [
      '16000 DPI | Wired',
      '24000 DPI | Wireless',
      '36000 DPI | Wireless + Charging Dock'
    ]
  },
  {
    id: '5',
    name: "JBL Bluetooth Speaker",
    price: 5999,
    image: "speaker.jpg",
    quantity: 4,
    brand: "JBL",
    category: "Bluetooth Speaker",
    rating: 4.4,
    variety: [
      'Black | 12W Output',
      'Blue | 15W Output',
      'Green | 20W Output'
    ]
  },
  {
    id: '6',
    name: "Dell XPS 15 Laptop",
    price: 149999,
    image: "laptop.jpg",
    quantity: 2,
    brand: "Dell",
    category: "Laptop",
    rating: 4.7,
    variety: [
      '12GB RAM | 512GB SSD',
      '20GB RAM | 1TB SSD',
      '36GB RAM | 1TB SSD'
    ]
  }])


  productsLoaded = signal(false);

  loadProducts() {
    if (!this.productsLoaded()) {
      // Fetch products only if not already loaded
      this.products.set([
        {
          id: '1',
          name: "Boat Rockerz 450",
          price: 1250,
          image: "headphones.jpg",
          quantity: 5,
          brand: "Boat",
          category: "Headphones",
          rating: 4.5,  // Star rating
          variety: [
            'Black | Wired',
            'Red | Wireless',
            'Blue | Wireless + Mic'
          ]
        },
        {
          id: '2',
          name: "Sony Bravia X900H 65-inch 4K TV",
          price: 99999,
          image: "4kmonitor.jpg",
          quantity: 18,
          brand: "Sony",
          category: "4K Monitor",
          rating: 4.7,
          variety: [
            '43-Inch | 60Hz',
            '50-Inch | 120Hz',
            '65-Inch | 144Hz'
          ]
        },
        {
          id: '3',
          name: "Apple Watch Series 8",
          price: 39999,
          image: "smartwatch.jpg",
          quantity: 2,
          brand: "Apple",
          category: "Smartwatch",
          rating: 4.8,
          variety: [
            '41mm | GPS',
            '45mm | GPS + Cellular'
          ]
        },
        {
          id: '4',
          name: "Nvidia Shield Gaming Mouse",
          price: 4999,
          image: "gamingmouse.jpg",
          quantity: 3,
          brand: "Nvidia",
          category: "Gaming Mouse",
          rating: 4.6,
          variety: [
            '16000 DPI | Wired',
            '24000 DPI | Wireless',
            '36000 DPI | Wireless + Charging Dock'
          ]
        },
        {
          id: '5',
          name: "JBL Bluetooth Speaker",
          price: 5999,
          image: "speaker.jpg",
          quantity: 4,
          brand: "JBL",
          category: "Bluetooth Speaker",
          rating: 4.4,
          variety: [
            'Black | 12W Output',
            'Blue | 15W Output',
            'Green | 20W Output'
          ]
        },
        {
          id: '6',
          name: "Dell XPS 15 Laptop",
          price: 149999,
          image: "laptop.jpg",
          quantity: 2,
          brand: "Dell",
          category: "Laptop",
          rating: 4.7,
          variety: [
            '12GB RAM | 512GB SSD',
            '20GB RAM | 1TB SSD',
            '36GB RAM | 1TB SSD'
          ]
        }]);
      this.productsLoaded.set(true); // Set to true once loaded
    }

    return this.products();
  }
  cart = signal<Product[]>([])

  getProducts(){
    return this.products();
  }

  addToCart(product: Product) {
    // Set default quantity to 1
    const productWithDefaultQuantity = { ...product, quantity: 1 };

    this.cart.update((cartItems) => {
      // Check if the product is already in the cart
      const existingProduct = cartItems.find(item => item.name === product.name);
      if (existingProduct) {
        // If the product is already in the cart, you might want to update its quantity instead
        return cartItems.map(item => 
          item.name === product.name 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // If not, add the new product with quantity 1
        return [...cartItems, productWithDefaultQuantity];
      }
    });
  }
  getCartLength(){
    return this.cart().length
  }

  updateCartItemQuantity(product: any,quantity : number) {
    this.cart.update((cartItems) =>
      cartItems.map((item) =>
        item.name === product.name ? { ...item, quantity: quantity } : item
      )
    );
  }

  // Remove product from cart
  removeFromCart(product: any) {
    this.cart.update((cartItems) => cartItems.filter((item) => item.name !== product.name));
  }

}
