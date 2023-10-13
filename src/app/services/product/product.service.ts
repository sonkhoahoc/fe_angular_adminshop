import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host } from '../host';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = `${host}/Products/`;

constructor(
  private http: HttpClient
) { }

  getListProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}${'product-list'}`);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}${'product/'}${id}`);
  }

  getTotalProduct(): Observable<number>{
    return this.http.get<number>(`${this.url}${'product-count'}`);
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}${'product-create'}`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}${'product-put/'}${id}`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.url}${'product-delete/'}${id}`);
  }

}
