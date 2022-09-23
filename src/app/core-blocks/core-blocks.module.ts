import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule, HttpMethod } from '@auth0/auth0-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyServiceModule } from './notify/notify-service.module';
import { CoreAuthService } from './auth/core-auth.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      audience: environment.auth.audience,
      httpInterceptor: {
        allowedList: [
          `${environment.api}/recipes*`
        ]
      }
    }),
    NgbModule,
    NotifyServiceModule
  ],
  exports: [
    NotifyServiceModule
  ],
  providers: [
    CoreAuthService
  ]
})
export class CoreBlocksModule { }
