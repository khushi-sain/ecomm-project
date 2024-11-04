
import { Component, EventEmitter, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  faHeart = faHeart;

  @Output() addToCartEvent = new EventEmitter<void>(); 
  @Output() addToWishlistEvent = new EventEmitter<void>(); // Event to notify parent


  addToCart() {
    this.addToCartEvent.emit(); 
  }

  addToWishlist() {
    this.addToWishlistEvent.emit(); // Emit event when "Add to Wishlist" is clicked
  }
}


