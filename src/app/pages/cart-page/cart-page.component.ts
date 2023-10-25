import { Component } from '@angular/core';
import { Product } from 'src/app/schema/Product.schema';
import { CartProductsService } from 'src/app/service/cart-products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  public messageNotFound: string = "carrinho vazio";

  constructor(private cartProductsService: CartProductsService) {
    console.log(this.cartProductsService.getCartProducts());
  }

  getCartProducts() : Product[] {
    return this.cartProductsService.getCartProducts();
  }
}
