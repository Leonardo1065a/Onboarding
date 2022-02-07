import { CooperativeMemberDetail } from './models/cooperative-detail.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

import { CooperativeIdDTO } from './models/cooperative-id.resource';

@Injectable()
export class CooperativeService {
  
  constructor(public http: HttpClient) { }

  // It takes time to see the load button
  getByCpf(cpf: string): Observable<CooperativeIdDTO> {
      return this.http.get<CooperativeIdDTO>(`assets/server/cooperative=cpf-${cpf.trim()}.json`).pipe(delay(2000));
  }
  
  getById(id: number): Observable<CooperativeMemberDetail> {
      return this.http.get<CooperativeMemberDetail>(`assets/server/cooperative=id-${id}.json`).pipe(delay(2000));
  }

}
