import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingSession } from '../models/training-session';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor(private httpClient: HttpClient) { }

  getAlltrain(): Observable<TrainingSession[]> {
    return this.httpClient.get<TrainingSession[]>("http://localhost:3000/trainingSessions");
  }

  deleteTrain(id: number): Observable<TrainingSession> {
    return this.httpClient.delete<TrainingSession>("http://localhost:3000/trainingSessions/" + id);
  }

  getTrainById(id: number): Observable<TrainingSession> {
    return this.httpClient.get<TrainingSession>("http://localhost:3000/trainingSessions/" + id);
  }

  updateTrainInfo(Train: TrainingSession): Observable<TrainingSession> {
    return this.httpClient.put<TrainingSession>("http://localhost:3000/trainingSessions/" + Train.id, Train);
  }

  addTrain(Train: TrainingSession): Observable<TrainingSession> {
    return this.httpClient.post<TrainingSession>("http://localhost:3000/trainingSessions/", Train);
  }
}
