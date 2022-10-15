import { Injectable } from '@angular/core';
import {Admin} from "../models/admin";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientsArr: Client[] = []
  client: Client
  clientsUrl="http://localhost:8080/clients"

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(clients => this.clientsArr = clients),
        catchError(this.errorHandler.bind(this))
      );
  }

  getClientById(clientId: number | undefined): Observable<Client>{
    return this.http.get<Client>(this.clientsUrl+"/"+clientId);
  }

  createClient(client:Client):Observable<Object>{
    return this.http.post(this.clientsUrl, client);
  }

  deleteClient(clientId: number | undefined):Observable<Client[]>{
    return this.http.delete<Client[]>(this.clientsUrl+"/"+clientId)
      .pipe(
        tap(clients => this.clientsArr = clients)
      );
  }

  updateClient(clientId: number | undefined, client:Client): Observable<Object>{
    return this.http.put(this.clientsUrl+"/"+clientId, client)
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=>error.message);
  }
}
