import { Component } from '@angular/core';

import { Rider } from './rider';
import { RiderService } from './rider.service';
import { Van } from './van';
import { VanService } from './van.service';

@Component({
  selector: 'riders-list',
  template: `
<h2>Riders</h2>
<ul class="rider-list">
  <li *ngFor="let rider of riders"
    [class.selected]="rider === selectedRider"
    (click)="onSelect(rider)">
    <span class="rider-id">{{rider.id}}</span> {{rider.firstName}} {{rider.lastName}}
  </li>
</ul>
<rider-detail [rider]="selectedRider"></rider-detail>
`,
styles: [`
.selected {
    background-color: #cfd8dc ! important;
    color: white;
}

.rider-list {
    list-style-type: none;
}

.rider-list li {
    cursor: pointer;
}

.rider-id {
    display: none;    
}
`],
})
//export class RidersComponent implements OnInit  {
export class RidersComponent  {
    selectedRider: Rider;
    riders: Rider[];
    vanId: number;

    constructor(private riderService: RiderService) {
    }

    public onSelect(rider: Rider): void {
        this.selectedRider = rider;
    }  // onSelect

    public setVan(id: number): void {
        this.vanId = id;
    }

    private _getRiders(vanId: number): void {
        this.riderService.getRiders(vanId).then(riders => this.riders = riders);
    }

    public selectVan(id: number) {
        console.log("riders.component: van " + id + " selected")
        this._getRiders(id);
    }
}   // class AppComponent
