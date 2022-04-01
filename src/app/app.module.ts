import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreBlocksModule } from './core-blocks/core-blocks.module';
import { RecipesModule } from './recipes/recipes.module';
import { environment } from 'src/environments/environment';

Amplify.configure({
  Auth: environment.auth
});

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    CoreBlocksModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecipesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
