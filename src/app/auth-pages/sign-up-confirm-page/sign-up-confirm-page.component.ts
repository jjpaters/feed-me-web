import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailFormControl } from '../form-controls/email-form-control';
import { CodeFormControl } from '../form-controls/code-form-control';
import { ValidationFormControl } from '../form-controls/validation-form-control';

@Component({
  selector: 'app-sign-up-confirm-page',
  templateUrl: './sign-up-confirm-page.component.html',
  styleUrls: ['./sign-up-confirm-page.component.scss']
})
export class SignUpConfirmPageComponent implements OnInit {

  signupForm = new FormGroup({
    email: EmailFormControl.getControl('', false),
    code: CodeFormControl.getControl('', false)
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

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get code(): AbstractControl {
    return this.signupForm.get('code');
  }

  get showEmailErrors(): boolean {
    return ValidationFormControl.showErrors(this.email, this.submitted);
  }

  get showCodeErrors(): boolean {
    return ValidationFormControl.showErrors(this.code, this.submitted);
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
