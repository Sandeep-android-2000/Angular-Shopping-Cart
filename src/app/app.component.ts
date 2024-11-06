import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { ShoppingcartpageComponent } from './shoppingcartpage/shoppingcartpage.component';
import { FooterComponent } from "./footer/footer.component";
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductDashboardComponent, NavbarComponent, RouterOutlet, ShoppingcartpageComponent, FooterComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
