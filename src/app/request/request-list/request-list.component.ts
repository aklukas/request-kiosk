import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Request } from './../../shared';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  @Input() requests: Request;
  @Output() deleted = new EventEmitter();

}
