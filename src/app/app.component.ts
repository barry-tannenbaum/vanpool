import { Component } from '@angular/core';
import { RidersComponent } from './riders.component';

@Component({
  selector: 'my-app',
  template: `
<h1>{{title}}</h1>
<date-selector></date-selector>
<van-selector (onVanSelected)="ridersList.selectVan($event)"></van-selector>
<riders-list #ridersList></riders-list>
`,
})
export class AppComponent  {
    title: string = "Intel HRC Vanpool";

}   // class AppComponent
