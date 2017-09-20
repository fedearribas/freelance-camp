import { ProposalShowComponent } from './proposals/proposal-show/proposal-show.component';
import { ProposalListComponent } from './proposals/proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposals/proposal-new/proposal-new.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'proposals', component: ProposalsComponent, children: [
    { path: '', component: ProposalListComponent },
    { path: 'new', component: ProposalNewComponent },
    { path: ':id', component: ProposalShowComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
