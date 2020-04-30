import { Component } from '@angular/core';
import { AuthService } from './core-blocks/auth/auth.service';
import { faUtensils, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  iconLogo = faUtensils;
  iconMyAccount = faUser;
  iconLogOut = faSignOutAlt;

  navbarOpen = false;

  constructor(public authService: AuthService) { }

  logOut(): void {
    this.authService.signOut();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
