import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private leerFichero: HttpClient) {}


  getTopHeadLines() {
    return this.leerFichero.get('noticias.json');
  }
}
