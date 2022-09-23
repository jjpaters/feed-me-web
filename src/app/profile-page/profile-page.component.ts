import { Component } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { CoreAuthService } from '../core-blocks/auth/core-auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  user: User | null | undefined;

  constructor(private coreAuthService: CoreAuthService) {
    this.coreAuthService.user$.subscribe((res) => {
      this.user = res;
    });
  }

}
