import { Routes } from '@angular/router';



export const routes: Routes = [
    { path: 'productdetails/:productId', loadComponent: ()=> import('./product-details/product-details.component').then(mod => mod.ProductDetailsComponent)},
    {
      path: 'login',
      loadComponent:()=>import('./login/login.component').then(mod => mod.LoginComponent)
    },
    { 
      path: 'shopping-cart', 
      loadComponent: () => import('./shoppingcartpage/shoppingcartpage.component').then(mod => mod.ShoppingcartpageComponent),

    },

    {
      path:'checkout',
      loadComponent: ()=> import('./checkout/checkout.component').then(mod => mod.CheckoutComponent)
    },
    { path: '', loadComponent: () => import('./product-dashboard/product-dashboard.component').then(mod => mod.ProductDashboardComponent) },
    {
        path:'user-profile',  
        loadComponent: ()=> import('./profile/profile.component').then(m => m.ProfileComponent),

        children: [
          {
            path: '', redirectTo:'user-info', pathMatch:'full',
          },
            {
              path: 'user-info',
              loadComponent: () => import('./profile/user-info/user-info.component').then(m => m.UserInfoComponent),
            },
            {
              path: 'pan-card-info',
              loadComponent: () => import('./profile/pan-card-info/pan-card-info.component').then(m => m.PanCardInfoComponent)
            },
            {
              path:'manage-address',
              loadComponent: () => import('./profile/manage-address/manage-address.component').then(mod => mod.ManageAddressComponent)
            },
            {
              path:'orders',
              loadComponent:()=>import('./profile/orders/orders.component').then(mod =>mod.OrdersComponent)
            }
          ]
    },

   
        
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(mod => mod.NotFoundComponent) },
];
