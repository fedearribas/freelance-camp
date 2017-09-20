import { Proposal } from './../proposal.model';
import { ProposalsService } from './../proposals.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {

  proposal: Proposal;

  constructor(
    private route: ActivatedRoute, private proposalsService: ProposalsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
        params => {
          const id = +params['id'];
          this.proposalsService.getProposal(id).subscribe(
            (proposal: Proposal) => this.proposal = proposal
          );
        }
      );
  }
}
