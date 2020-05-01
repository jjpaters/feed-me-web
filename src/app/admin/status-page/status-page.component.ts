import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  message: string;
  messageDate: Date;

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.checkStatus();
  }

  async checkStatus(): Promise<void> {
    const res = await this.statusService.checkStatus();
    
    this.message = res.status.toString();
    this.messageDate = new Date();
    console.log(`${JSON.stringify(res)}`);
  }
}
