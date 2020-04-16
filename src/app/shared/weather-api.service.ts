import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  privateKey: string = '2f49791ded274e2d8798c76f17bd3f76';

  constructor(
    private http: HttpClient
  ) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=30.0&lon=60.0&appid=${this.privateKey}`);
  }
}