import { IProduct } from './../../../../../shared/mocks/1-components/product';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input()
  public product: IProduct;
  @Output()
  public goToProduct: EventEmitter<boolean> = new EventEmitter();

  public clickToGoToProduct(){
    this.goToProduct.emit();
  }
}
