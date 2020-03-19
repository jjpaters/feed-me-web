import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
