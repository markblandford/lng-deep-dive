import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, Observer } from 'rxjs';

export abstract class AppCanDeactivate {
  private deactivating: Observer<boolean> | undefined;

  canDeactivate(): Observable<boolean> {
    return new Observable((obs: Observer<boolean>) => {
      this.deactivating = obs;
      this.showWarning();
    });
  }

  private showWarning(): void {
    const decision = confirm('Data not saved. Do you really want to quit?');
    if (this.deactivating) {
      this.deactivating.next(decision);
      this.deactivating.complete();
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AppCanDeactivate> {
  canDeactivate(component: AppCanDeactivate): Observable<boolean> {
    return component.canDeactivate();
  }
}
