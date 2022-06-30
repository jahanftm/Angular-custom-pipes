import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {
  transform(value: any): any {
    if(!value) {
      return '';
    }

    const val = value.toString();
    if(val.length > 10) {
      const first = val.slice(0,4);
      const end = val.slice(val.length -4 , val.length)
      return first + '...' + end;
    }

    return value;
  }
}

