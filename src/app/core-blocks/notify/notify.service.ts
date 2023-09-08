import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  title: string;
  message: string;
  show: boolean;
  alertType: string;

  error(message: string): void {
    this.notify(message, 'danger');
  }

  info(message: string): void {
    this.notify(message, 'primary');
  }

  clear() {
    this.title = '';
    this.message = '';
    this.show = false;
  }

  private notify(message: string, alertType: string) {
    this.message = message;
    this.alertType = alertType;
    this.show = true;
    this.scrollToTop();
  }

  private scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
