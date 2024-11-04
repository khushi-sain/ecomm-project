import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-wishlist-button',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <button>
      <fa-icon [icon]="faHeart"></fa-icon> Wishlist ({{ wishlistCount }})
    </button>
  `,
  styles: [`
    button {
      display: flex;
      align-items: center;
      background-color:#3a6b35;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    fa-icon {
      margin-right: 5px;
    }
  `]
})
export class WishlistButtonComponent {
  faHeart = faHeart; 

  wishlistCount = 0;

  updateWishlistCount(newCount: number) {
    this.wishlistCount = newCount;
  }
}
