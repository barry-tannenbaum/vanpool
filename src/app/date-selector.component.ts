import { Component } from '@angular/core';

@Component({
    selector: 'date-selector',
    template: `
        <label>Date: </label>
        <input type="date" [(ngModel)]="htmlDate" name="selectedDate">
    `
})
export class DateSelectorComponent {
    selectedDate: Date;

    constructor() {
        this.selectedDate = this.normalizeDate(new Date());
    }

    normalizeDate(d: Date): Date {
        let offset: number = 0;
        switch (d.getDay()) {
            case 1: // Monday
            case 2: // Tuesday
            case 4: // Thursday
                break;

            case 0: // Sunday
            case 3: // Wednesday
                offset = 1;
                break;

            case 5: // Friday
                offset = 3;
                break;

            case 6: // Saturday
                offset = 2;
                break;
        }
        d.setDate(d.getDate() + offset);
        return d;
    }
}   // class DateSelectorComponent