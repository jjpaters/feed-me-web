import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyService } from './notify/notify.service';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [
    NotifyComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    NotifyComponent
  ],
  providers: [
    NotifyService
  ]
})
export class CoreBlocksModule { }
