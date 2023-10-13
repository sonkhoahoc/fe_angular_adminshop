import { Injectable } from '@angular/core';
import { host } from '../host';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Size } from 'src/app/model/size.model';

@Injectable({
  providedIn: 'root'
})
export class SizeProductService {

  private url = `${host}/Size/`;

constructor(private http: HttpClient) { }

  getlistSize(): Observable<Size[]>{
    return this.http.get<Size[]>(`${this.url}${'size-list'}`);
  }

  getlistSizebyPro_id(id: number): Observable<Size[]>{
    return this.http.get<Size[]>(`${this.url}${'size/product/'}${id}`);
  }

  getSizebyId(id: number): Observable<Size>{
    return this.http.get<Size>(`${this.url}${'size/'}${id}`);
  }

  createSize(size: Size): Observable<Size>{
    return this.http.post<Size>(`${this.url}${'size-create'}`, size);
  }

  updateSize(id: number, size: Size): Observable<Size>{
    return this.http.put<Size>(`${this.url}${'size-put/'}${id}`, size);
  }

  dedeleeteeSize(id: number): Observable<any>{
    return this.http.delete(`${this.url}${'size-delete/'}${id}`)
  }

}
