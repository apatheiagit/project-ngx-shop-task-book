import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input()
  public product: ICartProduct;
  @Output()
  public increment: EventEmitter<any> = new EventEmitter();
  @Output()
  public decrement: EventEmitter<any> = new EventEmitter();

  public onClickIncrement(){
    this.increment.emit();
  }

  public onClickDecrement(){
    this.decrement.emit();
  }
}
