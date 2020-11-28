import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_USERS = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  listAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.URL_USERS}/${id}`);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(this.URL_USERS, user, this.httpOptions);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.URL_USERS}/${user.id}`, user, this.httpOptions);
  }

  remove(id: number): Observable<object> {
    return this.httpClient.delete<User>(`${this.URL_USERS}/${id}`);
  }
}
