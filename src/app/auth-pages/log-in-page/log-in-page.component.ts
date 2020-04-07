import { Component } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from '../../core-blocks/notify/notify.service';
import { EmailFormControl } from '../form-controls/email-form-control';
import { PasswordFormControl } from '../form-controls/password-form-control';
import { ValidationFormControl } from '../form-controls/validation-form-control';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {

  form = new FormGroup({
    email: EmailFormControl.getControl('', false),
    password: PasswordFormControl.getControl('', false)
  });

  submitted = false;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private router: Router) { }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get showEmailErrors(): boolean {
    return ValidationFormControl.showErrors(this.email, this.submitted);
  }

  get showPasswordErrors(): boolean {
    return ValidationFormControl.showErrors(this.password, this.submitted);
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
          this.router.navigate(['forgot-password']);
        } else if (err.code === 'NotAuthorizedException' || err.code === 'UserNotFoundException') {
          this.notifyService.error('Incorrect email or password. Please try again.');
        } else {
          this.notifyService.error('Sorry, something happened! Please try again.');
        }
      });
    }
  }

}
