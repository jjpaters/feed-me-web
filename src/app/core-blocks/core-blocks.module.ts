import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyServiceModule } from './notify/notify-service.module';

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
  ]
})
export class CoreBlocksModule { }
