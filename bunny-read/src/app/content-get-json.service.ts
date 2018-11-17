import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Card{
  keyword: string;
  tokens: string[];
}

export interface Message{
  cards: Card[];
  html: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentGetJsonService {

  messUrl = 'api/data';

  constructor(
    private http: HttpClient
  ) { }

  getMessage(): Observable<Message>{
    return this.http.get<Message>(this.messUrl);
  }
}
