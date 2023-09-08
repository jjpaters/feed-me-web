import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyServiceModule } from './notify/notify-service.module';
import { environment } from 'src/environments/environment';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FormControlModalComponent } from './form-control-modal/form-control-modal.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    FormControlModalComponent
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: environment.auth.audience        
      },
      useRefreshTokens: true,
      httpInterceptor: {
        allowedList: [
          `${environment.api}/recipes*`
        ]
      }
    }),
    FormsModule,
    NgbModule,
    NotifyServiceModule
  ],
  exports: [
    NotifyServiceModule
  ]
})
export class CoreBlocksModule { }
