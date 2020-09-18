import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    const n = Math.abs(countOfReviews) % 100;
    const n1 = n % 10;
    if (countOfReviews > 10 && n < 20){
      return countOfReviews + ' отзывов';
    }
    if (n1 > 1 && n1 < 5){
      return countOfReviews + ' отзыва';
    }
    if (n1 === 1){
      return countOfReviews + ' отзыв';
    }
  }
}
