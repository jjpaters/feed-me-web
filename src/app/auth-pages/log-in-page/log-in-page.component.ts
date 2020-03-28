import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from '../../core-blocks/notify/notify.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  submitted = false;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private router: Router) { }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get showEmailErrors() {
    return this.email.invalid && (this.email.dirty || this.email.touched || this.submitted);
  }

  get showPasswordErrors() {
    return this.password.invalid && (this.password.dirty || this.password.touched || this.submitted);
  }

  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  onSubmit() {
    const username = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.submitted = true;

    if (this.form.valid) {
      this.authService.signIn(username, password).subscribe((res) => {
        this.router.navigate(['home']);
      }, (err) => {
        if (err.code === 'UserNotConfirmedException') {
          this.router.navigate(['signup', this.form.get('email').value]);
        } else if (err.code === 'PasswordResetRequiredException') {
          // The error happens when the password is reset in the Cognito console
          // In this case you need to call forgotPassword to reset the password
          // Please check the Forgot Password part.
        } else if (err.code === 'NotAuthorizedException' || err.code === 'UserNotFoundException') {
          this.notifyService.error('Incorrect email or password. Please try again.');
        } else {
          this.notifyService.error('Sorry, something happened! Please try again.');
        }
      });
    }
  }

}
