import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { filter } from 'rxjs/operators';

import { NotifyService } from './core-blocks/notify/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarOpen = false;

  constructor(public authService: AuthService, private notifyService: NotifyService, private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.notifyService.clear();
      });
  }

  closeMenu() {
    this.navbarOpen = false;
  }

  logIn(): void {
    this.authService.loginWithPopup();
  }

  logOut(): void {
    this.authService.logout();
    this.closeMenu();
  }

  navigate(route: string) {
    this.closeMenu();
    this.router.navigate([route]);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
