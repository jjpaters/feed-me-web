import { Injectable } from '@angular/core';

import { Status, StatusCode } from '../models/status';
import { ProtectedService } from 'src/app/core-blocks/auth/protected.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private protectedService: ProtectedService) { }

  async checkStatus(): Promise<Status> {
    let status: Status;

    try {
      status = (await this.protectedService.get(`health`)) as Status;
    } catch {
      status = new Status();
      status.status = StatusCode.Fail;
    }

    return status;
  }
}
