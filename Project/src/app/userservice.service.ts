import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private baseurl="http://localhost:8082/author/getAuthors"
private baseurll="http://localhost:8081/book/getBooks"
  constructor(private http:HttpClient) { }
  getAuthors(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseurl}`);
  }
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseurl}`);
  }
}
