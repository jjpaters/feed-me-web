import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Amplify from '@aws-amplify/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

Amplify.configure({ Auth: environment.aws.auth });

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AmplifyAngularModule
  ],
  providers: [
    AuthService,
    AmplifyService
  ]
})
export class AuthModule { }
