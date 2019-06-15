import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
  declarations: [HomePageComponent, AuthPageComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
