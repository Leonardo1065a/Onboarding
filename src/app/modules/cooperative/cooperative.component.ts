import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { CooperativeService } from './cooperative.service';
import { debounceTime, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ManageSearchButtonPresenter } from './data/manage-search-button.presenter';
import { ManageFormPresenter } from './data/manage-form.presenter';
import { ManagerFooterPresenter } from './../../core/layout/footer/manager-footer.presenter';
import { GenericValidator } from './../../shared/validator/generic-validator';

@Component({
  selector: 'app-cooperative',
  templateUrl: './cooperative.component.html',
  styleUrls: ['./cooperative.component.scss']
})
export class CooperativeComponent implements OnInit, OnDestroy {

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  load: boolean;
  loadDetail: boolean;
  private _warning = new Subject<string>();
  warningMessage = '';

  cpf = new FormControl(null, [GenericValidator.isValidCpf(), Validators.required]);

  constructor(
    private service: CooperativeService, 
    private router: Router, 
    readonly manageSearchButtonPresenter: ManageSearchButtonPresenter,
    readonly manageFormPresenter: ManageFormPresenter,
    readonly managerFooterPresenter: ManagerFooterPresenter
  ) {
    manageSearchButtonPresenter.createObservable();
    manageFormPresenter.createObservable();
    
    manageFormPresenter.cpf$.subscribe(cpf => {
      this.cpf.patchValue(cpf);
    });
    managerFooterPresenter.btnDicas = true;
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loadDetail = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadDetail = false;
      }
    });

    this._warning.subscribe(message => this.warningMessage = message);
    this._warning.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });

  }

  click() {
    this.cpf.markAsTouched();
    if (this.cpf.valid) {
      this.load = true
      this.service.getByCpf(this.cpf.value)
        .pipe(finalize(() => this.load = false))
        .subscribe(cooperadtive => { 
          this.manageSearchButtonPresenter.emit(true);
          this.router.navigate([`/cooperative/${cooperadtive.id}`]);
      }, () => {
        this._warning.next(`CPF não encontrado em nosso banco de dados`);
      });
    } else {
      this._warning.next(`Informe um CPF válido.`);
    }
  }

  ngOnDestroy(): void {
      this.manageSearchButtonPresenter.destroyObservable();
      this.manageFormPresenter.destroyObservable();
  }

}
