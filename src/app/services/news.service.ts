import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Article, NewsRespuesta} from './../interfaces';

@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private leerFichero: HttpClient) {}


  getTopHeadLines(): Observable<Article[]> {
    return this.leerFichero.get<NewsRespuesta>('/assets/noticias/noticias.json')
        .pipe(map(({articles}) => articles));
  }


  // getTopHeadlinesByCategory(category: string): Observable<Article[]> {
  //   return this.leerFichero.get<NewsRespuesta>('/assets/noticias/noticias.json')
  //       .pipe(map(({articles}) => articles));
  // }
}
