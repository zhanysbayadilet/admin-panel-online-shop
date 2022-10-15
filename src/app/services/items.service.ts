import { Injectable } from '@angular/core';
import {Client} from "../models/client";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsArr: Item[] = []
  item: Item
  itemsUrl="http://localhost:8080/items"

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(items => this.itemsArr = items),
        catchError(this.errorHandler.bind(this))
      );
  }

  getItemById(itemId: number | undefined): Observable<Item>{
    return this.http.get<Item>(this.itemsUrl+"/"+itemId);
  }

  createItem(item:Item):Observable<Object>{
    return this.http.post(this.itemsUrl, item);
  }

  deleteItem(itemId: number | undefined):Observable<Item[]>{
    return this.http.delete<Item[]>(this.itemsUrl+"/"+itemId)
      .pipe(
        tap(items => this.itemsArr = items)
      );
  }

  updateItem(itemId: number | undefined, item:Item): Observable<Object>{
    return this.http.put(this.itemsUrl+"/"+itemId, item)
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=>error.message);
  }
}
