import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.authService.handleAuth();
  }

  ngOnInit() {
  }

}
