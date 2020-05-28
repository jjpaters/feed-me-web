import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';

import { Status, StatusCode } from '../models/status';
import { AuthService } from '../../core-blocks/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private authService: AuthService) { }

  async checkStatus(): Promise<Status> {

    let status: Status;

    try {
      const headers = await this.authService.protectedHeaders();
  
      status= (await API.get('ApiGateway', 'health', headers)) as Status;
    } catch {
      status = new Status();
      status.status = StatusCode.Fail;
    }
    
    return status;
  }
}
