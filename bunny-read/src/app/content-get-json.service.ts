import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TokenInterface{
  id: string;
  sentence: string;
}

export interface CardInterface{
  keyword: string;
  tokens: TokenInterface[];
}

export interface MessageInterface{
  cards: CardInterface[];
  html: string;
}

export interface URLKEYWORDInterface{
  url: string;
  keywords: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentGetJsonService {

  messUrl = 'api/data';

  constructor(
    private http: HttpClient
  ) { }

  getMessage(): Observable<MessageInterface>{
    return this.http.get<MessageInterface>(this.messUrl);
  }

}
