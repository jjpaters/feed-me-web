import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from './auth/auth.module';
import { NotifyServiceModule } from './notify/notify-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    AuthModule,
    NotifyServiceModule
  ]
})
export class CoreBlocksModule { }
