import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  constructor(public authService: AuthService) { }

  async get(url: string): Promise<any> {
    const headers = await this.protectedHeaders();

    const response = await API.get(`ApiGateway`, url, headers);

    return response;
  }

  async getUserId(): Promise<string> {
    const userId = (await this.authService.currentSession()).getIdToken().payload['cognito:username'];

    return userId;
  }

  private async protectedHeaders() {
    const token = (await this.authService.currentSession()).getIdToken().getJwtToken();

    const init = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    return init;
  }
}
