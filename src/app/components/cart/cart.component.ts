import { Component } from '@angular/core';
import { Product } from 'src/app/schema/Product.schema';
import { CartProductsService } from 'src/app/service/cart-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartProductsService: CartProductsService) {}

  getCartProducts() : Product[] {
    return this.cartProductsService.getCartProducts();
  }
}
