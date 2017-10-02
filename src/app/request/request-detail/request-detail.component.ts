import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Request } from './../../shared';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;

  types = [
    'Prayer',
    'Testimony',
    'Visitor'
    ];

  @Output() submitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.reset();
  }
  reset() {
    this.request = {
      id: null,
      name: '',
      date: '',
      type: '',
      message: '',
    };
  }

}
