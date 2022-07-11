import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {
  transform(value: any, start: number, end: number): any {
    if(!value) {
      return '';
    }

    const val = value.toString();
    if(val.length > 10) {
      const _first = val.slice(start, end);
      const _end = val.slice(val.length - end , val.length)
      return _first + '...' + _end;
    }

    return value;
  }
}

