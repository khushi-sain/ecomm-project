import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <button >
      <fa-icon [icon]="faShoppingCart"></fa-icon> Cart ({{ cartCount }})
    </button>
  `,
  styles: [`
    button {
      display: flex;
      align-items: center;
      background-color:#e3b448;
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
export class CartButtonComponent {
  faShoppingCart = faShoppingCart;

  cartCount = 0;

  updateCartCount(newCount: number) {
    this.cartCount = newCount;
  }
 
}

