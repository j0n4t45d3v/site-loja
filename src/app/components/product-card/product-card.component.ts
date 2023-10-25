import { Component, Input } from '@angular/core';
import { CartProductsService } from 'src/app/service/cart-products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  public product: any;

  constructor(private cartProductService: CartProductsService) {}

  public getProductPriceFormated(): string {
    const priceWithTwoCases = this.product.price.toFixed(2);
    const changeDotToComma = priceWithTwoCases.replace('.', ',');

    return changeDotToComma;
  }

  public addProductToCart(): void {
    this.cartProductService.addCartProduct(this.product);
  }
}
