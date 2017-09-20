import { Observable } from 'rxjs/Observable';
import { ProposalsService } from './../proposals.service';
import { Proposal } from './../proposal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;
  submitted = false;

  constructor(private proposalsService: ProposalsService) { }

  ngOnInit() {
  }

  createProposal(proposal: Proposal) {
    this.submitted = true;
    this.proposalsService.createProposal(proposal).subscribe(
      data => true,
      error => {
        console.log('Error saving proposal');
        return Observable.throw(error);
      }
    );
  }



}
