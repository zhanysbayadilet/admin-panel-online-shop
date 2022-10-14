import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAdmin'
})
export class SearchAdminPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
