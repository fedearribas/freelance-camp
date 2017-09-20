import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Subscription';
import { ProposalsService } from './../proposals.service';
import { Proposal } from './../proposal.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit, OnDestroy {

  proposals: Proposal[] = [];
  errorMessage: string;
  timerSubscription: Subscription;

  constructor(private proposalsService: ProposalsService) {}

  ngOnInit() {
    this.timerSubscription = TimerObservable.create(0, 5000).subscribe(
      () => this.getProposals()
    );
  }

  getProposals() {
    this.proposalsService.getProposals().subscribe(
      (proposals: Proposal[]) => this.proposals = proposals,
      (error) => this.errorMessage = error
    );
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
