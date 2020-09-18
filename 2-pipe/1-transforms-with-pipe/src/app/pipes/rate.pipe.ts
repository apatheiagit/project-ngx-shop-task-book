import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const x = Math.trunc(value); // Целая часть
    const y = value - x; // Дробная часть
    if (y < 0.25){
      return x;
    }
    if (y > 0.25 && y < 0.75){
      return x + 0.5;
    }
    else{
      return x + 1;
    }
  }
}
