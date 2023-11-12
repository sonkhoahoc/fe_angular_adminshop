import { Injectable } from '@angular/core';
import { host } from '../host';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voucher } from 'src/app/model/voucher.model';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  private url = `${host}/Voucher/`

constructor(
  private http: HttpClient
) { }

  getList(): Observable<Voucher>{
    return this.http.get<Voucher>(`${this.url}${'voucher-list'}`);
  }

  getVoucherbyId(id: number): Observable<Voucher>{
    return this.http.get<Voucher>(`${this.url}${'voucher/'}${id}`);
  }

  createVoucher(voucher: Voucher): Observable<Voucher>{
    return this.http.post<Voucher>(`${this.url}${'voucher-create'}`, voucher);
  }

  updateVoucher(id: number, voucher: Voucher): Observable<Voucher>{
    return this.http.put<Voucher>(`${this.url}${'voucher-put/'}${id}`, voucher);
  }

  deleteVoucher(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}${'voucher-delete/'}${id}`);
  }

}
