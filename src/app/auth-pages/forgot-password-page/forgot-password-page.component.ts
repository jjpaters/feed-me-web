import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    code: new FormControl({ value: '', disabled: true }, [Validators.required]),
    password: new FormControl({ value: '', disabled: true }, [Validators.required])
  });

  verificationSubmitted = false;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private router: Router) { }

  ngOnInit(): void { }

  onVerificationSubmit() {
    if (this.form.valid) {
      const username = this.form.get('email').value;
      this.authService.forgotPassword(username).subscribe((res) => {
        this.enableConfirmForgotPassword();
      }, (err) => {
        this.notifyService.error('Unable send the verification code, please try again.');
      });
    }
  }

  enableConfirmForgotPassword() {
    this.verificationSubmitted = true;
    this.form.get('code').enable();
    this.form.get('password').enable();
  }

}
