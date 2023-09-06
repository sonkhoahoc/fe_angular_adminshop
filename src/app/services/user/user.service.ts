import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { host } from '../host';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${host}/User/`;

  constructor(private http: HttpClient) { }

  checkUser(username: string, email: string): Observable<any>{
    const request = {
      username: username,
      email: email
    }

    return this.http.get<any>(`${this.url}checkuserexists`, {params: request})
  }

  login(username: string, password: string){
    const request = {
      username: username,
      password: password
    };

    return this.http.post<any>(`${this.url}authenticate`, request)
  }

  create(newUser){
    return this.http.post<any>(`${this.url}create`, newUser)
  }

}
