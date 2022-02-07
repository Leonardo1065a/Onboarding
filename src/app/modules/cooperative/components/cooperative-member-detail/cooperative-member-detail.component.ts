import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ManageSearchButtonPresenter } from './../../data/manage-search-button.presenter';
import { CooperativeMemberDetail } from '../../models/cooperative-detail.model';
import { ManagerFooterPresenter } from './../../../../core/layout/footer/manager-footer.presenter';
import { ManageFormPresenter } from './../../data/manage-form.presenter';

@Component({
  selector: 'app-cooperative-member-detail',
  templateUrl: './cooperative-member-detail.component.html',
  styleUrls: ['./cooperative-member-detail.component.scss']
})
export class CooperativeMemberDetailComponent implements OnInit, OnDestroy {

  memberDetail: CooperativeMemberDetail;
  
  constructor(
    activatedRoute: ActivatedRoute, 
    readonly manageSearchButtonPresenter: ManageSearchButtonPresenter,
    readonly manageFormPresenter: ManageFormPresenter,
    readonly managerFooterPresenter: ManagerFooterPresenter
  ) { 
    activatedRoute.data.subscribe(data => {
      this.memberDetail = data.cooperativeMemberDetail;
      manageSearchButtonPresenter.emit(true);
      manageFormPresenter.emit(this.memberDetail.cpf);
      managerFooterPresenter.btnIniciarAdmissao = true;
    })
  }
  

  ngOnInit(): void { }

  duplicateApplicationAccount(): void {
    this.memberDetail.constasAplicacao.push(this.memberDetail.constasAplicacao[0]);
  }
  
  duplicateCheckingAccount(): void {
    this.memberDetail.constasCorrente.push(this.memberDetail.constasCorrente[0]);
  }

  ngOnDestroy(): void {
      this.manageSearchButtonPresenter.emit(false);
      this.manageFormPresenter.emit('')
  }

}

