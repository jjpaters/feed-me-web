import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Status } from '../models/status';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  checkStatus(): Observable<Status> {
    return this.http.get<Status>(`${environment.aws.api.uri}/health`);
  }
}
