import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyComponent } from './notify/notify.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


const MaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
]

@NgModule({
  declarations: [
    NotifyComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ]
})
export class CoreBlocksModule { }
