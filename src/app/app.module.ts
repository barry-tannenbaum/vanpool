import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DateSelectorComponent } from './date-selector.component';
import { RiderDetailComponent} from './rider-detail-component';
import { RidersComponent } from './riders.component';
import { VanSelectorComponent } from './van-selector.component';
import { RiderService } from './rider.service';
import { VanService } from './van.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path: "riders",  component: RidersComponent },
    ]),
   ],
  declarations: [
    AppComponent,
    DateSelectorComponent,
    RiderDetailComponent,
    RidersComponent,
    VanSelectorComponent,
  ],
  providers: [
    RiderService,
    VanService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}   // class AppModule
