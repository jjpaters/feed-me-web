import { Component } from '@angular/core';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {

  constructor(public notifyService: NotifyService) { }

  close() {
    this.notifyService.clear();
  }

}
