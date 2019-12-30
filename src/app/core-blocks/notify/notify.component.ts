import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {

  @Input() title: string;
  @Input() message: string;

  constructor(private activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.dismiss();
  }

}
