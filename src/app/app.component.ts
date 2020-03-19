import { Component } from '@angular/core';
import { AuthService } from './core-blocks/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarOpen = false;

  constructor(public authService: AuthService) { }

  logOut(): void {
    this.authService.signOut();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
