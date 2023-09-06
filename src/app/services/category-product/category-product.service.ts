import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { host } from '../host';

import { Category_Product } from 'src/app/model/category-product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  private url = `${host}/Category_Product/`

  constructor(private http: HttpClient) { }

  getlistCategory_product(): Observable<Category_Product[]> {
      return this.http.get<Category_Product[]>(`${this.url}category-product-list`);
  }

  getCategory_productbyId(id: number): Observable<Category_Product>{
      return this.http.get<Category_Product>(`${this.url}${'category-product/'}${id}`);
  }

  createCategory_product(categoryProduct: Category_Product): Observable<Category_Product>{
      return this.http.post<Category_Product>(`${this.url}${'category-product-create'}`, categoryProduct);
  }

  updateCategory_product(id: number, categoryProduct: Category_Product): Observable<Category_Product>{
      return this.http.put<Category_Product>(`${this.url}${'category-product-put/'}${id}`,categoryProduct);
  }

  deleteCategory_product(id: number): Observable<any>{
      return this.http.delete(`${this.url}${'category-product-delete/'}${id}`);
  }

}
