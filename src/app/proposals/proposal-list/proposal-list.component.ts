import { Proposal } from './../proposal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
	proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
	proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
