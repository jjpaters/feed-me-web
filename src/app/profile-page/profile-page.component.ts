import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  user: User | null | undefined;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((res) => {
      this.user = res;
    });
  }

}
