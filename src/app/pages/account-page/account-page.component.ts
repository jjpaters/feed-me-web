import { Component, OnInit } from '@angular/core';
import { CognitoAuthService } from '@jjpaters/cognito-auth-lib';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  constructor(public authService: CognitoAuthService) { }

  ngOnInit() {
  }

}
