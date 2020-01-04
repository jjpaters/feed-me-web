import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { NotifyServiceModule } from './notify/notify-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    NotifyServiceModule
  ],
  exports: [
    AuthModule,
    NotifyServiceModule
  ]
})
export class CoreBlocksModule { }
