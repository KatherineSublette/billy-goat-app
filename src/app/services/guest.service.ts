import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiBaseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getGuests(): Observable<Guest[]> {
    return this.http
      .get<Guest[]>(this.apiBaseUrl + 'guest');
  }

  getGuest(guestId: number): Observable<Guest> {
    return this.http.get<Guest>(this.apiBaseUrl + 'guest/' + guestId.toString());
  }

  getGuestByUserId(userId: number): Observable<Guest> {
    return this.http.get<Guest>(this.apiBaseUrl + 'guest/?userId=' + userId);
  }

  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiBaseUrl + 'guest', guest);
  }

  updateGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(this.apiBaseUrl + 'guest/' + guest.id.toString(), guest);
  }

  deleteGuest(guestId: number): Observable<Guest> {
    return this.http.delete<Guest>(this.apiBaseUrl + 'guest/' + guestId.toString());
  }
}
