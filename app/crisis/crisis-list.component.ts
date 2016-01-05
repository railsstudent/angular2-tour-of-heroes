import { Component, OnInit } from 'angular2/core';
import { Crisis, CrisisService} from './crisis.service';
import { RouteParams, Router } from 'angular2/router';

@Component({
    templateUrl: '../app/crisis/template/crisis-list.html'
})
export class CrisisListComponent implements OnInit {
  public crises: Crisis[];
  private _selectedId: number;

  constructor(private _crisisService: CrisisService, private _router: Router,
      routeParams: RouteParams) {
    this._selectedId = +routeParams.get('id');
  }

  ngOnInit() {
    this._crisisService.getCrises().then(crises => this.crises = crises);
  }

  onClick(crisis: Crisis) {
    this._router.navigate(['CrisisDetail', {id : crisis.id }]);
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this._selectedId;
  }

}
