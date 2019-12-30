import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyServiceModule } from './notify/notify-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotifyServiceModule
  ]
})
export class CoreBlocksModule { }
