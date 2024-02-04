import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alerts } from '../models/alerts';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private httpClient: HttpClient) { }

  getAllAlerts(): Observable<Alerts[]> {
    return this.httpClient.get<Alerts[]>("http://localhost:3000/alerts");
  }

  deletealert(id: number): Observable<Alerts> {
    return this.httpClient.delete<Alerts>("http://localhost:3000/alerts/" + id);
  }

  getAlertById(id: number): Observable<Alerts> {
    return this.httpClient.get<Alerts>("http://localhost:3000/alerts/" + id);
  }

  updateAlertInfo(alert: Alerts): Observable<Alerts> {
    return this.httpClient.put<Alerts>("http://localhost:3000/alerts/" + alert.idAlert, alert);
  }

  addAlert(alert: Alerts): Observable<Alerts> {
    return this.httpClient.post<Alerts>("http://localhost:3000/alerts/", alert);
  }
}
