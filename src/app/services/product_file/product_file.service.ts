import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host } from '../host';
import { Observable } from 'rxjs';
import { Product_File } from 'src/app/model/product_file.model';

@Injectable({
  providedIn: 'root'
})
export class Product_fileService {

  private url = `${host}/Product_File/`

constructor(
  private http: HttpClient
) { }

  getListProduct_File(): Observable<Product_File>{
    return this.http.get<Product_File>(`${this.url}${'product-file-list'}`);
  }

  getProduct_FilebyId(id: number): Observable<Product_File>{
    return this.http.get<Product_File>(`${this.url}${'product-file/'}${id}`);
  }

  createProduc_File(product_file: Product_File): Observable<Product_File>{
    return this.http.post<Product_File>(`${this.url}${'product-file-create'}`, product_file);
  }

  updateProduct_File(id: number, product_file: Product_File): Observable<Product_File>{
    return this.http.put<Product_File>(`${this.url}${'product-file-put/'}${id}`, product_file);
  }

  deleteProduct_File(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}${'product-file-delete/'}${id}`);
  }

}
