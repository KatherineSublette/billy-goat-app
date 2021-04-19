import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getUsers(filter?: string): Observable<User[]> {
    if(filter != undefined){
      return this.http
        .get<User[]>(this.apiBaseUrl + 'user' + filter);
    }
    else{
      return this.http
        .get<User[]>(this.apiBaseUrl + 'user');
    }
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(this.apiBaseUrl + 'user/' + userId.toString());
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiBaseUrl + 'user', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiBaseUrl + 'user/' + user.id, user);
  }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(this.apiBaseUrl + 'user/' + userId.toString());
  }
}
