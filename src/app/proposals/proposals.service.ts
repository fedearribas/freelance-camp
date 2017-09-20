import { Proposal } from './proposal.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProposalsService {

  private proposalUrl = 'https://freelance-proposals-api-fedearribas.c9users.io/proposals';

  constructor(private http: Http) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalUrl).map(
      (response: Response) => <Proposal[]>response.json()
    ).catch(this.handleError);
  }

  getProposal(id: number) {
    return this.http.get(this.proposalUrl + '/' + id).map(
      (response: Response) => <Proposal>response.json()
    ).catch(this.handleError);
  }

  createProposal(proposal: Proposal) {
    return this.http.post(this.proposalUrl, proposal);
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
