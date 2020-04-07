import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { NotifyComponent } from './notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private modalService: NgbModal) { }

  error(message: string) {
    return this.notify('Uh oh!', message);
  }

  info(message: string) {
    return this.notify('Hey!', message);
  }

  private notify(title: string, message: string): NgbModalRef<typeof NotifyComponent> {
    const modal = this.modalService.open(NotifyComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
    return modal;
  }

}
