import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ManageSearchButtonPresenter {
  
  private _button = new Subject<boolean>();
  private _isDisabled: boolean;

  createObservable(): void {
    this._button.subscribe(isDisabled => {
      this._isDisabled = isDisabled;
    });
  }

  emit(isDisabled: boolean): void {
    this._button.next(isDisabled);
  }

  destroyObservable() {
    this._isDisabled = false;
    this._button.unsubscribe();
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

}
