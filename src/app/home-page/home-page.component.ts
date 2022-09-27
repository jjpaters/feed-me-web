import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreAuthService } from '../core-blocks/auth/core-auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isAuthenticated$: Observable<boolean>;

  constructor(private coreAuthService: CoreAuthService) {
    this.isAuthenticated$ = this.coreAuthService.isAuthenticated$;
  }

  logIn(): void {
    this.coreAuthService.logIn();
  }

}
