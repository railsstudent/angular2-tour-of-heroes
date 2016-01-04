import { Component, OnInit } from 'angular2/core';

@Component({
    template: `<ul>
                  <li *ngFor="#crisis of crises"
                    [class.selected] = "isSelected(crisis)"
                    (click) = onClick(crisis)>
                    <span class="badge">{{crisis.id}}</span> {{crisis.name}}
                  </li>
              </ul>`
})
export class CrisisListComponent implements OnInit {

  ngOnInit() {
    
  }

}
