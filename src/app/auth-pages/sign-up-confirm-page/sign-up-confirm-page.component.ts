import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-confirm-page',
  templateUrl: './sign-up-confirm-page.component.html',
  styleUrls: ['./sign-up-confirm-page.component.scss']
})
export class SignUpConfirmPageComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl({ value: '', disabled: true }),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private notifyService: NotifyService,
    private router: Router) { }

  ngOnInit() {
    this.email.setValue(this.route.snapshot.paramMap.get('username'));
  }

  get email() {
    return this.signupForm.get('email');
  }

  get code() {
    return this.signupForm.get('code');
  }

  get showEmailErrors() {
    return this.email.invalid && (this.email.dirty || this.email.touched || this.submitted);
  }

  get showCodeErrors() {
    return this.code.invalid && (this.code.dirty || this.code.touched || this.submitted);
  }

  onReset() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.authService.confirmSignUp(this.email.value, this.code.value).subscribe((res) => {
        this.router.navigate(['login']);
      }, (err) => {
        this.notifyService.error('Unable to confirm sign up, please try again.');
      });
    }
  }

  resendVerificationCode() {
    this.authService.resendSignUp(this.email.value).subscribe((res) => {
      this.notifyService.info('Your verification code was re-sent. Please check your email.');
    }, (err) => {
      this.notifyService.error('Your verification code was re-sent. Please check your email.');
    });
  }
}
