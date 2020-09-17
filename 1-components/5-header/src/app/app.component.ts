import { Component } from '@angular/core';
import { cartProduct, ICartProduct } from '../../../../shared/mocks/1-components/cart-product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = '1. Интерполяция и связывание (Header)';
  public terminalMessage: string;
  public product = cartProduct;

  public goToBasket() {
    this.terminalMessage = 'Переход в компонент корзины';
  }

}
