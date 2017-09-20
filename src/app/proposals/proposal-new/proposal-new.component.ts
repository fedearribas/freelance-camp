import { Proposal } from './../proposal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;

  constructor() { }

  ngOnInit() {
  }

}
