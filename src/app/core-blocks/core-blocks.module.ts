import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyServiceModule } from './notify/notify-service.module';
import { CoreAuthService } from './auth/core-auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
