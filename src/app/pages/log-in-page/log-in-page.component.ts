import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CognitoAuthService } from '@jjpaters/cognito-auth-lib';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  submitted = false;

  constructor(private authService: CognitoAuthService,
    private notifyService: NotifyService,
    private router: Router) { }

  ngOnInit() { }

  onReset() {
    this.submitted = false;
  }

  onSubmit() {
    const username = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.submitted = true;
    this.authService.signIn(username, password).subscribe((res) => {
      this.router.navigate(['home']);
    }, (err) => {
      this.notifyService.notify('Uhoh!', 'Unable to log in, please try again.');
    })
  }

}
