import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Request } from '../shared';
import 'rxjs/add/operator/map';


const requestsUrl = 'http://localhost:3000/requests';

const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


@Injectable()
export class RequestsService {
  constructor(private http: Http) { }

    loadRequests() {
      return this.http.get(requestsUrl)
        .map(resp => resp.json());
  }

    create(request: Request) {
      return this.http.post(`${requestsUrl}`, JSON.stringify(request), HEADER)
        .map(res => res.json());
    }

    delete(request: Request) {
      return this.http.delete(`${requestsUrl}/${request.id}`)
        .map(res => res.json());
    }
}
