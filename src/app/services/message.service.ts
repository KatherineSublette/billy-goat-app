import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiBaseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getMessages(filter?: string): Observable<Message[]> {
    if(filter != undefined){
      return this.http
        .get<Message[]>(this.apiBaseUrl + 'message' + filter);
    }
    else{
      return this.http
        .get<Message[]>(this.apiBaseUrl + 'message');
    }
  }

  getMessage(messageId: number): Observable<Message> {
    return this.http.get<Message>(this.apiBaseUrl + 'message/' + messageId.toString());
  }

  getMessagesByGuestId(guestId: number): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiBaseUrl + 'message/?guestId=' + guestId);
  }

  getMessagesByGuideId(guideId: number): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiBaseUrl + 'message/?guideId=' + guideId);
  }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiBaseUrl + 'message', message);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(this.apiBaseUrl + 'message/' + message.id.toString(), message);
  }

  deleteMessage(messageId: number): Observable<Message> {
    return this.http.delete<Message>(this.apiBaseUrl + 'message/' + messageId.toString());
  }
}
