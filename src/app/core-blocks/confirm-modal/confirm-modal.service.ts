import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  message: string;
  confirmText = 'Ok';
  denyText = 'Cancel';
  modalRef: NgbModalRef;

  constructor(private modal: NgbModal) { }

  open(message: string, confirmText?: string, denyText?: string): NgbModalRef {
    this.message = message;
    if (confirmText) {
      this.confirmText = confirmText;
    }
    if (denyText) {
      this.denyText = denyText;
    }
    this.modalRef = this.modal.open(ConfirmModalComponent);
    return this.modalRef;
  }
}
