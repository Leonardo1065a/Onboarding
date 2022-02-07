import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ManageFormPresenter {
  
    private _cpf = new Subject<string>();
    cpf$: Observable<string>;
  
    createObservable(): void {
      this.cpf$ = this._cpf.asObservable();
    }
  
    emit(cpf: string): void {
      this._cpf.next(cpf);
    }
  
    destroyObservable() {
      this._cpf.complete();
    }

}
