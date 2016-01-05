import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams, ComponentInstruction, CanDeactivate } from 'angular2/router';
import { Crisis, CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service';

@Component({
  template: `<div *ngIf='crisis'>
                <h3>{{editName}}</h3>
                <div>
                  <label>Name: </label>
                  <input [(ngModel)]="editName" placeholder="name" />
                </div>
                <button (click)="save()">Save</button>
                <button (click)="cancel()">Cancel</button>
            </div>
              `,
  styles: ['input { width: 20em }']
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {
  crisis: Crisis;
  editName: string;

  constructor(private _crisisService: CrisisService,
    private _dialogService: DialogService,
    private _router: Router,
    private _routeParams: RouteParams) {
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
    if (!this.crisis || this.crisis.name === this.editName) {
        return true;
    }
    return this._dialogService.confirm('Discard changes?');
  }

  save() {
    // update crisis name
    this.crisis.name = this.editName;
    this.gotoCrisis();
  }

  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrisis();
  }

  ngOnInit() {
    let id : number = +this._routeParams.get('id');
    this._crisisService.getCrisis(id).then(crisis => {
      if (crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else {
        this.gotoCrisis();
      }
    });
  }

  gotoCrisis() {
      let crisisId = this.crisis ? this.crisis.id : null;
      this._router.navigate([ 'CrisisList', { id : crisisId } ]);
  }
}
