import { Observable } from 'rxjs/Observable';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import { DocumentsService } from './documents.services';
import { Document } from './document.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  pageTitle = 'Documents Dashboard';
  errorMessage = '';
  private timerSubscription: Subscription;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.timerSubscription = TimerObservable.create(0, 5000).subscribe(
      () => this.getDocuments()
    );
  }

  getDocuments() {
    this.documentsService.getDocuments().subscribe(
      (documents: Document[]) => this.documents = documents,
      (error) => this.errorMessage = error
    );
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
