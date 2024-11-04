import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { WishlistButtonComponent } from './wishlist-button/wishlist-button.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BeautyComponent } from './beauty/beauty.component';
import { LivingComponent } from './living/living.component';

export const routes: Routes = [
    {
         path: '', 
         component: LoginComponent ,
    },
    {
        path: 'header', 
        component: HeaderComponent,
    },
    {
        path: 'product-list', 
        component: ProductListComponent,
    },
    {
        path: 'cart-button', 
        component: CartButtonComponent,
    },
    {
        path: 'wishlist-button',
        component: WishlistButtonComponent,
    },
    {
        path: 'men',
        component: MenComponent,
    },
    { 
        path:'women',
        component: WomenComponent,
    },
    {
        path:'beauty',
        component: BeautyComponent,
    },
    {
        path: 'living',
        component: LivingComponent,
    },
    { path: '**', redirectTo: '' } ,
   
];


