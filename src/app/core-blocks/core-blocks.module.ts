import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CognitoAuthLibModule } from '@jjpaters/cognito-auth-lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifyServiceModule } from './notify/notify-service.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CognitoAuthLibModule.forRoot({ Auth: environment.aws.auth }),
    CommonModule,
    NgbModule,
    NotifyServiceModule
  ]
})
export class CoreBlocksModule { }
