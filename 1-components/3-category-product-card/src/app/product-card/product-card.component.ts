import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
  @Input()
  public product: IProduct;
  @Output()
  public addToCart: EventEmitter<any> = new EventEmitter();
  @Output()
  public goToProduct: EventEmitter<any> = new EventEmitter();

  public clickAddToCart(){
    this.addToCart.emit();
  }

  public clickGoToProduct(){
    this.goToProduct.emit();
  }
}
