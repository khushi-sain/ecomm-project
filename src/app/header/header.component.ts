import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartButtonComponent } from '../cart-button/cart-button.component';
import { WishlistButtonComponent } from '../wishlist-button/wishlist-button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductListComponent, CartButtonComponent, WishlistButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  cartCount = 0;

  @ViewChild(CartButtonComponent) cartButtonComponent!: CartButtonComponent;


  updateCartCount() {
    this.cartCount++;
    this.cartButtonComponent.updateCartCount(this.cartCount);
  }

  wishlistCount = 0;

  @ViewChild(WishlistButtonComponent) wishlistButtonComponent!: WishlistButtonComponent;


  updateWishlistCount() {
    this.wishlistCount++;
    this.wishlistButtonComponent.updateWishlistCount(this.wishlistCount);
  }

  constructor(private router: Router) { }
  
  navigateToWishlistbutton() {
    this.router.navigate(['/wishlist-button']);
  }
  navigateToCartbutton() {
    this.router.navigate(['/cart-button']);
  }

}

