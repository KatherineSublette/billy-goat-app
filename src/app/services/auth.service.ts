import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginResponse } from '../models/loginResponse.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public user: User;

  public login(email: string, password: string): Observable<LoginResponse> {

    const body: Object = {
      email: email,
      password: password
    };
    
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    
    const url = 'http://localhost:5000/api/login';

    return this.http.post<LoginResponse>(url, body, { headers: headers })
  }
}
