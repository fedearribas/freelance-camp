import { Document } from './document.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentsService {
  private documentsUrl = 'https://rails-5-apis-fedearribas.c9users.io/documents/';

  constructor(private http: Http) { }

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl).map(
      (response: Response) => <Document[]>response.json()
    ).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.mesage ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
