import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

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
