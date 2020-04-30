import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StatusService } from './services/status.service';
import { StatusPageComponent } from './status-page/status-page.component';

const routes: Routes = [
  { path: 'admin', component: StatusPageComponent },
];

@NgModule({
  declarations: [
    StatusPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    StatusService
  ]
})
export class AdminModule { }
