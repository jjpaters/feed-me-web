import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core-blocks/auth/auth.service';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

  signupForm = new FormGroup({
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

  constructor(private authService: AuthService, private notifyService: NotifyService) { }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get showEmailErrors() {
    return this.email.invalid && (this.email.dirty || this.email.touched || this.submitted);
  }

  get showPasswordErrors() {
    return this.password.invalid && (this.password.dirty || this.password.touched || this.submitted);
  }

  onReset() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.authService.signUp(this.email.value, this.password.value).subscribe((res) => {
        console.log(JSON.stringify(res));
      }, (err) => {
        this.notifyService.notify('Sign Up', JSON.stringify(err));
      })
    }
  }

}
