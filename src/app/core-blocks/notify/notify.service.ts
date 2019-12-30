import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NotifyComponent } from './notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private modalService: NgbModal) { }

  notify(title: string, message: string): NgbModalRef<typeof NotifyComponent> {
    const modal = this.modalService.open(NotifyComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
    return modal;
  }

}
