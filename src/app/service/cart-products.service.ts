import { Injectable } from '@angular/core';
import { Product } from '../schema/Product.schema';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  private cartProducts: Product[] = [];
  constructor() {}

  getCartProducts() {
    return this.cartProducts;
  }

  addCartProduct(product: Product) {
    const filterProductId: Product[] = this.cartProducts.filter(
      (p) => p.id === product.id
    );
    const productAlreadyExists: boolean = filterProductId.length == 0;
    product.id;
    this.cartProducts.push(product);
  }
}
