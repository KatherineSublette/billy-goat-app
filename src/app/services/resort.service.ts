import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resort } from '../models/resort.model';

@Injectable({
  providedIn: 'root'
})
export class ResortService {
  private apiBaseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getResorts(): Observable<Resort[]> {
    return this.http
      .get<Resort[]>(this.apiBaseUrl + 'resort');
  }

  getResort(resortId: number): Observable<Resort> {
    return this.http.get<Resort>(this.apiBaseUrl + 'resort/' + resortId.toString());
  }

  addResort(resort: Resort): Observable<Resort> {
    return this.http.post<Resort>(this.apiBaseUrl + 'resort', resort);
  }

  updateResort(resort: Resort): Observable<Resort> {
    return this.http.put<Resort>(this.apiBaseUrl + 'resort/' + resort.id.toString(), resort);
  }

  deleteResort(resortId: number): Observable<Resort> {
    return this.http.delete<Resort>(this.apiBaseUrl + 'resort/' + resortId.toString());
  }
}
