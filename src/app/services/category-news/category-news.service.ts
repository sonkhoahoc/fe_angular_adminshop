import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { host } from "../host";

import { Category_News } from 'src/app/model/category-news.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryNewsService {

  private url = `${host}/Category_News/`

  constructor(
    private http: HttpClient
  ) { }

  getListCategory_news(): Observable<Category_News[]>{
    return this.http.get<Category_News[]>(`${this.url}category-news-list`);
  }

  getCategory_newsbyId(id: number): Observable<Category_News>{
    return this.http.get<Category_News>(`${this.url}${'category-news/'}${id}`);
  }

  createCategory_news(categoryNews: Category_News): Observable<Category_News>{
    return this.http.post<Category_News>(`${this.url}${'category-news-create'}`, categoryNews);
  }

  updateCategory_news(id: number, categoryNews: Category_News): Observable<Category_News>{
    return this.http.put<Category_News>(`${this.url}${'category-news-put/'}${id}`, categoryNews);
  }

  deleteCategory_news(id: number): Observable<any>{
    return this.http.delete(`${this.url}${'category-news-delete/'}${id}`);
  }

}
