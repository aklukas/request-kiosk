import { Component, OnInit } from '@angular/core';
import { RequestsService } from './../shared';
import { Request } from './../shared';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requests: Request;


  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }


  getRequests() {
    this.requestsService.loadRequests()
      .subscribe(requests => this.requests = requests);
  }

  createRequest(request) {
    this.requestsService.create(request)
      .subscribe(response => {
        this.getRequests();
      });
  }

  deleteRequest(request) {
    this.requestsService.delete(request)
      .subscribe(response => {
        this.getRequests();
      });
  }
}
