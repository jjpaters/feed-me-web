import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { NotifyService } from '../core-blocks/notify/notify.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User | undefined;

  constructor(private auth: AuthService, private notify: NotifyService) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe((res: User | undefined) => {
      this.user = res;
    }, (err: HttpErrorResponse) => {
      this.notify.error(err.message);
    });
  }

}
