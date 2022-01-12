import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private http: HttpClient) {}


  getTopHeadLines() {
    return this.http.get('../noticias/noticias.json');
  }
}
