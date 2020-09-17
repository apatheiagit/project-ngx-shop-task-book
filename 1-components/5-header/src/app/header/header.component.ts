import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input()
  public product: ICartProduct;
  @Output()
  public goToBasket: EventEmitter<boolean> = new EventEmitter();

  public clickToBasket(){
    this.goToBasket.emit();
  }
}
