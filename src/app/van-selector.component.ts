import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';

import { Van } from './van';
import { VanService } from './van.service';
import { RidersComponent } from './riders.component';

@Component({
  selector: 'van-selector',
  template: `
  <div *ngIf="selectedVan">
    <label>Van: </label>
    <select (change)="onSelect($event.target.value)">
      <option *ngFor="let van of vans" [value]="van.id" >{{van.display}}</option>
    </select>
  </div>
`,
})
export class VanSelectorComponent implements OnInit {
    selectedVan: Van;
    vans: Van[];
    @Output() onVanSelected = new EventEmitter<number>();

    public constructor(private vanService: VanService){
    }

    // Angular initialization lifecycle hook
    public ngOnInit(): void {
       this._getVans();
    }  // ngOnInit

    private _getVans(): void {
        this.vanService.getVans().then( vans => {
            this.vans = vans;
            this.selectedVan = this.vans[0];
            this.onVanSelected.emit(this.selectedVan.id);
        });
    }

    public onSelect(vanId: number): void {
        for (let i: number = 0; i < this.vans.length; i++) {
            if (this.vans[i].id == vanId) {
                this.selectedVan = this.vans[i];
                this.onVanSelected.emit(this.selectedVan.id);
                return;
            }
        }
        this.selectedVan = null;
    }

}   // class VanComponent