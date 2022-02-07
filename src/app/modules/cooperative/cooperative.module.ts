import { ManageFormPresenter } from './data/manage-form.presenter';
import { ManageSearchButtonPresenter } from './data/manage-search-button.presenter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CooperativeService } from './cooperative.service';
import { CooperativeComponent } from './cooperative.component';
import { CooperativeRoutingModule } from './cooperative-routing.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { CooperativeMemberDetailComponent } from './components/cooperative-member-detail/cooperative-member-detail.component';
import { CooperativeMemberDetailResolver } from './resolvers/cooperative-member-detail.resolver';

const maskConfig: Partial<IConfig> = { validation: false };

@NgModule({
  declarations: [
    CooperativeComponent,
    StepperComponent,
    CooperativeMemberDetailComponent
  ],
  imports: [
    CommonModule,
    CooperativeRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ 
    CooperativeService, 
    CooperativeMemberDetailResolver, 
    ManageSearchButtonPresenter,
    ManageFormPresenter
  ]
})
export class CooperativeModule { }
