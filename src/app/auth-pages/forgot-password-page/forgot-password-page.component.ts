import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';
import { EmailFormControl } from '../form-controls/email-form-control';
import { PasswordFormControl } from '../form-controls/password-form-control';
import { CodeFormControl } from '../form-controls/code-form-control';
import { ValidationFormControl } from '../form-controls/validation-form-control';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  form = new FormGroup({
    email: EmailFormControl.getControl('', false),
    code: CodeFormControl.getControl('', true),
    password: PasswordFormControl.getControl('', true)
  });

  submitted = false;
  submittedFinal = false;
  confirmForgotPassword = false;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private router: Router) { }

  ngOnInit(): void { }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get code(): AbstractControl {
    return this.form.get('code');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get showEmailErrors(): boolean {
    return ValidationFormControl.showErrors(this.email, this.submitted);
  }

  get showCodeErrors(): boolean {
    return ValidationFormControl.showErrors(this.code, this.submittedFinal);
  }

  get showPasswordErrors(): boolean {
    return ValidationFormControl.showErrors(this.password, this.submittedFinal);
  }

  enableConfirmForgotPassword() {
    this.form.get('code').enable();
    this.form.get('password').enable();
    this.confirmForgotPassword = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const username = this.form.get('email').value;
      this.authService.forgotPassword(username).subscribe((res) => {
        this.enableConfirmForgotPassword();
      }, (err) => {
        this.notifyService.error('Unable send the verification code, please try again.');
      });
    }
  }

  onSubmitFinal() {
    this.submittedFinal = true;
    if (this.form.valid) {
      const username = this.form.get('email').value;
      const code = this.form.get('code').value;
      const password = this.form.get('password').value;
      this.authService.forgotPasswordSubmit(username, code, password).subscribe((res) => {
        this.router.navigate(['login']);
      }, (err) => {
        this.notifyService.error('Unable to confirm the new password, please try again.');
      });
    }
  }



}
