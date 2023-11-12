import { Injectable } from '@angular/core';
import { host } from '../host';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news.model'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = `${host}/News/`

  constructor(
    private http: HttpClient
  ) { }


  getListNews(): Observable<News[]>{
    return this.http.get<News[]>(`${this.url}${'news-list'}`);
  }

  getTotalNews(): Observable<number>{
    return this.http.get<number>(`${this.url}${'news-count'}`);
  }

  getNewsById(id: number): Observable<News>{
    return this.http.get<News>(`${this.url}${'news/'}${id}`);
  }

  createNews(news: News): Observable<News>{
    return this.http.post<News>(`${this.url}${'news-create'}`, news);
  }

  updateNews(id: number, news: News): Observable<News>{
    return this.http.put<News>(`${this.url}${'news-put/'}${id}`, news);
  }

  deleteNews(id: number): Observable<any>{
    return this.http.delete(`${this.url}${'news-delete/'}${id}`);
  }
}
