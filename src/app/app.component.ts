import { Component } from '@angular/core';
import { CognitoAuthService } from '@jjpaters/cognito-auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarOpen = false;

  constructor(public authService: CognitoAuthService) { }

  logOut(): void {
    this.authService.signOut();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
