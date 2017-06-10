import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, order: any): any {
    return value.sort((a, b) => order ? a.date > b.date : a.date < b.date);
  }

}
