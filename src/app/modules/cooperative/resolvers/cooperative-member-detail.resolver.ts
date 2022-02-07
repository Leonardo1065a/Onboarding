import { CooperativeService } from './../cooperative.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CooperativeMemberDetail } from '../models/cooperative-detail.model';

@Injectable()
export class CooperativeMemberDetailResolver implements Resolve<CooperativeMemberDetail> {

  constructor(private service: CooperativeService) {}

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<CooperativeMemberDetail> {
    const id = route.params.id;
    return this.service.getById(id);
  }
}
