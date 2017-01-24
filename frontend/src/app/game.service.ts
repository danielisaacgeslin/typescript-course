import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API } from './constants';

@Injectable()
export class GameService {

  constructor(public http: Http) { }

  getGames(): Observable<ServerResponses.IList<IGame>> {
    return this.http.get(`${API}/game`)
      .map((response: Response) => <ServerResponses.IList<IGame>>response.json());
  }
}
