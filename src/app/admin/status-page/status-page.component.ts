import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Status } from '../models/status';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  message: string;

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.checkStatus();
  }

  checkStatus(): void {
    this.statusService.checkStatus().subscribe((res: Status) => {
      this.message = res.status.toString();
    });
  }
}
