import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Guide } from '../models/guide.model';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private apiBaseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getGuides(): Observable<Guide[]> {
    return this.http
      .get<Guide[]>(this.apiBaseUrl + 'guide');
  }

  getGuide(guideId: number): Observable<Guide> {
    return this.http.get<Guide>(this.apiBaseUrl + 'guide/' + guideId.toString());
  }

  addGuide(guide: Guide): Observable<Guide> {
    return this.http.post<Guide>(this.apiBaseUrl + 'guide', guide);
  }

  updateGuide(guide: Guide): Observable<Guide> {
    return this.http.put<Guide>(this.apiBaseUrl + 'guide/' + guide.id.toString(), guide);
  }

  deleteGuide(guideId: number): Observable<Guide> {
    return this.http.delete<Guide>(this.apiBaseUrl + 'guide/' + guideId.toString());
  }
}
