import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retrospec'
})
export class RetrospecPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const seconds = Math.floor((Date.now() - Date.parse(value)) / 1000);
    if (seconds < 0) { return 'from future' }

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

}
