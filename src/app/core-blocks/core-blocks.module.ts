import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyServiceModule } from './notify/notify-service.module';
import { CoreAuthService } from './auth/core-auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    NotifyServiceModule
  ],
  exports: [
    FontAwesomeModule,
    NotifyServiceModule
  ],
  providers: [
    CoreAuthService
  ]
})
export class CoreBlocksModule { }
