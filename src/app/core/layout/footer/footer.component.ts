import { Component, OnInit } from '@angular/core';
import { ManagerFooterPresenter } from './manager-footer.presenter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(readonly managerFooterPresenter: ManagerFooterPresenter) { }

  ngOnInit(): void {
  }

}
