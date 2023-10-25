import { Component } from '@angular/core';
import { CartProductsService } from 'src/app/service/cart-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', ],
})
export class HeaderComponent {
  constructor(private cartProductService: CartProductsService) {}

  public getQuantityProductsInCart(): number {
    return this.cartProductService.getCartProducts().length;
  }
}
