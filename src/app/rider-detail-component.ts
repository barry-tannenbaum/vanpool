import { Component, Input } from '@angular/core';

import { Rider } from './rider';

@Component ({
  selector: 'rider-detail',
  template: `
<div *ngIf="rider">
    <h2>{{rider.firstName}} {{rider.lastName}} details:</h2>
    <div><label>id: </label>{{rider.id}}</div>
    <div>
      <label>first name: </label>
      <input [(ngModel)]="rider.firstName" placeholder="first name" />
    </div>
    <div>
      <label>last name: </label>
      <input [(ngModel)]="rider.lastName" placeholder="last name" />
    </div>
    <div>
      <label>email: </label>
      <input [(ngModel)]="rider.email" placeholder="email" />
    </div>
    <div>
      <label>cell number: </label>
      <input [(ngModel)]="rider.cell" placeholder="cell" />
    </div>
</div>
`,
})
export class RiderDetailComponent {
    @Input()
    rider: Rider;
}