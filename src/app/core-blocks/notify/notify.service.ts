import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackBar: MatSnackBar) { }

  error(message: string): void {
    this.notify(message, 'Okay');
  }

  info(message: string): void {
    this.notify(message, 'Okay');
  }

  clear() {
    this.snackBar.dismiss();
  }

  private notify(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
