import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Metrics } from '../models/metrics';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  apiURL = 'http://localhost:3000/metrics';

  

  constructor(private httpClient: HttpClient) { }

  add(metricsData: Metrics): Observable<Metrics>{
    return this.httpClient.post<Metrics>(this.apiURL,metricsData);

  }

  get(): Observable<Array<Metrics>> {
    return this.httpClient.get<Array<Metrics>>(this.apiURL)
  }

  getMetrics(id: number): Observable<Metrics> {
    return this.httpClient.get<Metrics>(`${this.apiURL}/${id}`);
  }

  updateMetrics(metricsData: Metrics): Observable<Metrics> {
    return this.httpClient.put<Metrics>(`${this.apiURL}/${metricsData.id}`,metricsData);
  }
}
