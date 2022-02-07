import { CooperativeMemberDetailResolver } from './resolvers/cooperative-member-detail.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CooperativeComponent } from './cooperative.component';
import { CooperativeMemberDetailComponent } from './components/cooperative-member-detail/cooperative-member-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: CooperativeComponent,
    children: [ 
      { 
        path: ':id', 
        component: CooperativeMemberDetailComponent,
        resolve: { cooperativeMemberDetail: CooperativeMemberDetailResolver }
      }
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CooperativeRoutingModule { }