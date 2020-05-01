import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';

import { Status } from '../models/status';
import { AuthService } from '../../core-blocks/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private authService: AuthService) { }

  async checkStatus(): Promise<Status> {
    const token = (await this.authService.currentSession()).getIdToken().getJwtToken();

    const init = { 
      headers: { 
        Authorization: `Bearer ${token}`,
      }
    };

    const response = await API.get('ApiGateway', 'health', init);

    return response as Status;
  }
}
