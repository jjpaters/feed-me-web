import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import { Hub } from 'aws-amplify';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreAuthService {

  isAuthenticated: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
    this.listenToAuth();
  }

  logOut(): void {
    Auth.signOut();
  }

  /**
   * Manually listening until the Amplify UI Angular components provide a better way.
   * Source: https://docs.amplify.aws/guides/authentication/listening-for-auth-events/q/platform/js/
   */
  private listenToAuth(): void {
    // Capture if a user is already logged in but the page is reloaded.
    Auth.currentAuthenticatedUser().then((res) => {
      this.isAuthenticated.next(true);
    }, () => {
      this.isAuthenticated.next(false);
    });

    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          this.isAuthenticated.next(true);
          break;
        // case 'signUp':
        //   this.isAuthenticated.next(true);
        //   break;
        case 'signOut':
          this.isAuthenticated.next(false);
          this.router.navigate(['/']);
          break;
        case 'configured':
          console.log('here');
          break;
      }
    });
  }

}
