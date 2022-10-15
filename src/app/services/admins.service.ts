import {Injectable} from "@angular/core";

import {catchError, Observable, tap, throwError} from "rxjs";

import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Admin} from "../models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  adminsArr: Admin[] = []
  admin: Admin
  adminsUrl="http://localhost:8080/admins"

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.adminsUrl)
      .pipe(
        tap(admins => this.adminsArr = admins),
        catchError(this.errorHandler.bind(this))
      );
  }

  getAdminById(adminId: number | undefined): Observable<Admin>{
    return this.http.get<Admin>(this.adminsUrl+"/"+adminId);
  }

  createAdmin(admin:Admin):Observable<Object>{
    return this.http.post(this.adminsUrl, admin);
  }

  deleteAdmin(adminId: number | undefined):Observable<Admin[]>{
    return this.http.delete<Admin[]>(this.adminsUrl+"/"+adminId)
      .pipe(
        tap(admins => this.adminsArr = admins)
      );
  }

  updateAdmin(adminId: number | undefined, admin:Admin): Observable<Object>{
    return this.http.put(this.adminsUrl+"/"+adminId, admin)
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=>error.message);
  }
}
