import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() { }

  onReset() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log(`Valid: ${this.loginForm.valid}`);
  }

}
