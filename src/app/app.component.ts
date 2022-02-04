import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CoreAuthService } from './core-blocks/auth/core-auth.service';
import { NotifyService } from './core-blocks/notify/notify.service';
import { faUtensils, faUser, faSignOutAlt, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuthenticated$: Observable<boolean>;
  iconLogo = faUtensils;
  iconMyAccount = faUser;
  iconRecipe = faDrumstickBite;
  iconLogOut = faSignOutAlt;

  navbarOpen = false;

  constructor(private coreAuthService: CoreAuthService, private notifyService: NotifyService, private router: Router) {
    
    this.isAuthenticated$ = this.coreAuthService.isAuthenticated;

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
    this.navigate('profile');
  }

  logOut(): void {
    this.coreAuthService.logOut();
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
