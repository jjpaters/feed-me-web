import { NgModule } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyService } from './notify.service';

@NgModule({
    declarations: [
      NotifyComponent
    ],
    entryComponents: [
      NotifyComponent
    ],
    providers: [
      NotifyService
    ]
  })
  export class NotifyServiceModule { }
