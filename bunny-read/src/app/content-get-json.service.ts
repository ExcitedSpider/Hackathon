import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    "Access-Control-Allow-Origin": "*",
    'Accept': 'application/json'
  })
};

export interface MessageInterface{
  cards: {
    keyword: string;
    tokens: {
      id: string;
      sentence: string;
    }[];
  }[];
  html: string;
}

export interface URLKEYWORDInterface{
  url: string;
  keyWords: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentGetJsonService {

  messUrl = 'http://127.0.0.1:8080/curl';

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(urlKeyword: URLKEYWORDInterface): Observable<MessageInterface>{
    return this.http.post<MessageInterface>(this.messUrl, urlKeyword, httpOptions);
  }
  
}
