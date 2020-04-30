import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from 'aws-amplify';

import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }
  checkStatus(): Observable<Status> {
    return from(API.get('ApiGateway', 'health', {})).pipe(map((res: any) => res as Status));
  }
}
