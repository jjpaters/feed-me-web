import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { CoreBlocksModule } from '../core-blocks/core-blocks.module';
import { StatusService } from './services/status.service';
import { StatusPageComponent } from './status-page/status-page.component';

const routes: Routes = [
  { path: 'admin', component: StatusPageComponent, canActivate: [AdminGuard] },
];

@NgModule({
  declarations: [
    StatusPageComponent
  ],
  imports: [
    CommonModule,
    CoreBlocksModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    StatusService
  ]
})
export class AdminModule { }
