// export type Product = {
//     id: string;
//     name: string;
//     brand: string;
//     price: number;
//     quantity: number;
//     image: string;
// }

export type Product = {
    id: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
    rating: number;  // Star rating from 1 to 5
    variety: string[];  // List of features
}

export type Order = {
  items: Product[];
  date: string;
  status: 'On the way' | 'Delivered' | 'Cancelled' | 'Returned'; // Add status
}

export interface OrderSummary {
  totalAmount: number;
  savings: number;
}