import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreBlocksModule } from './core-blocks/core-blocks.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RecipeLandingPageComponent } from './recipe-landing-page/recipe-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
    RecipeLandingPageComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreBlocksModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
