import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host } from '../host';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/model/slider.model';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private url = `${host}/Slider/`

  constructor(
    private http: HttpClient,
  ) { }

  getListSlider(): Observable<Slider[]>{
    return this.http.get<Slider[]>(`${this.url}slider-list`);
  }

  getSliderbyId(id: number): Observable<Slider>{
    return this.http.get<Slider>(`${this.url}${'slider/'}${id}`);
  }

  createSlider(slider: Slider): Observable<Slider>{
    return this.http.post<Slider>(`${this.url}slider-create`, slider);
  }

  updateSlider(id: number, slider: Slider): Observable<Slider>{
    return this.http.put<Slider>(`${this.url}${'slider-put/'}${id}`, slider);
  }

  deleteSlider(id: number): Observable<any>{
    return this.http.delete(`${this.url}${'slider-delete/'}${id}`);
  }
}
