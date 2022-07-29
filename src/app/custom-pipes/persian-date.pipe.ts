import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'jalali-moment';

export const DAY_FORMAT = 'YYYY/MM/DD';
export const HOUR_FORMAT = 'HH:mm:ss';
export const DAY_HOUR_FORMAT = 'YYYY/MM/DD  HH:mm';

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: number, format: string): string {

    if (value && format) {
      if (format === 'DAY_HOUR_FORMAT')
        return moment(value).locale('fa').format(DAY_HOUR_FORMAT);
    }
    if (format === 'HOUR_FORMAT') {
      return moment(value).locale('fa').format(HOUR_FORMAT);
    }

    return moment(value).locale('fa').format(DAY_FORMAT);
  }

}
