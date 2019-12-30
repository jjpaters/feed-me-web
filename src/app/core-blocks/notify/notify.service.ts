import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifyComponent } from './notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private modalService: NgbModal) { }

  notifyInfo(title: string, message: string) {
    this.openModal(title, message);
  }

  notifyError(title: string, message: string) {
    this.openModal(title, message);
  }

  notifyWarning(title: string, message: string) {
    this.openModal(title, message);
  }

  private openModal(title: string, message: string) {
    const modal = this.modalService.open(NotifyComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
  }

}
