import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../models/item";

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(items: Item[], term: string): Item[] {
    if (term.length === 0) return items
    return items.filter(i => i.name.toLowerCase().includes(term.toLowerCase()));
  }

}
