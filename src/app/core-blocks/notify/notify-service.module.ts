import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyComponent } from './notify.component';
import { NotifyService } from './notify.service';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        NotifyComponent
    ],
    exports: [
        NotifyComponent
    ],
    providers: [
        NotifyService
    ]
})
export class NotifyServiceModule { }
