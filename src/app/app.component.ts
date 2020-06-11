import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './core-blocks/auth/auth.service';
import { NotifyService } from './core-blocks/notify/notify.service';
import { faUtensils, faUser, faSignOutAlt, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  iconLogo = faUtensils;
  iconMyAccount = faUser;
  iconRecipe = faDrumstickBite;
  iconLogOut = faSignOutAlt;

  navbarOpen = false;

  constructor(public authService: AuthService, private notifyService: NotifyService, private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.notifyService.clear();
      });
  }

  logOut(): void {
    this.authService.signOut();
    this.navigate('/home');
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
