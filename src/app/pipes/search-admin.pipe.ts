import { Pipe, PipeTransform } from '@angular/core';
import {Admin} from "../models/admin";

@Pipe({
  name: 'searchAdmin'
})
export class SearchAdminPipe implements PipeTransform {

  transform(admins: Admin[], term: string): Admin[] {
    if (term.length === 0) return admins
    return admins.filter(a => a.firstname.toLowerCase().includes(term.toLowerCase()));
  }

}
