import { Component } from '@angular/core';
import { Product } from 'src/app/schema/Product.schema';
import { CartProductsService } from 'src/app/service/cart-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public quantity: number = 1;
  constructor(private cartProductsService: CartProductsService) {}

  public getCartProducts(): Product[] {
    return this.cartProductsService.getCartProducts();
  }

  public addQuantity(): void {
    this.quantity++;
  }
  public subQuantity(): void {
    if (this.quantity > 0)
      this.quantity--;
  }
}
