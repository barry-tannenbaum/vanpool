import { Component } from '@angular/core';
import { RidersComponent } from './riders.component';

@Component({
  selector: 'my-app',
  template: `
<h1>{{title}}</h1>
<date-selector (onDateSelected)="ridersList.selectVan(currentVan, $event); saveDay($event)"></date-selector>
<van-selector (onVanSelected)="ridersList.selectVan($event, currentDay); saveVan($event)"></van-selector>
<riders-list #ridersList></riders-list>
`,
})
export class AppComponent  {
    title: string = "Intel HRC Vanpool";
    currentVan: number = 1;
    currentDay: number = 1;

    saveDay(day: number) {
        this.currentDay = day;
    }

    saveVan(id: number) {
        this.currentVan = id;
    }
}   // class AppComponent
