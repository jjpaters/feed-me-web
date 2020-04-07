import { Component } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';
import { EmailFormControl } from '../form-controls/email-form-control';
import { PasswordFormControl } from '../form-controls/password-form-control';
import { ValidationFormControl } from '../form-controls/validation-form-control';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

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

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.authService.signUp(this.email.value, this.password.value).subscribe((res) => {
        this.router.navigate(['signup', this.email.value]);
      }, (err) => {
        this.notifyService.error('Unable to sign up, please try again');
      });
    }
  }

}
