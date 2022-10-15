import { Pipe, PipeTransform } from '@angular/core';
import {Admin} from "../models/admin";
import {Client} from "../models/client";

@Pipe({
  name: 'searchClient'
})
export class SearchClientPipe implements PipeTransform {

  transform(clients: Client[], term: string): Client[] {
    if (term.length === 0) return clients
    return clients.filter(c => c.firstname.toLowerCase().includes(term.toLowerCase()));
  }

}
