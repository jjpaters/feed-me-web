import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import { AmplifyAngularModule, AmplifyModules, AmplifyService } from 'aws-amplify-angular';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ProtectedService } from './protected.service';

Amplify.configure({ Auth: environment.aws.auth, API: environment.aws.api });

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AmplifyAngularModule
  ],
  providers: [
    AuthService,
    ProtectedService,
    {
      provide: AmplifyService,
      useFactory:  () => {
        return AmplifyModules({
          Auth
        });
      }
    }
  ]
})
export class AuthModule { }
