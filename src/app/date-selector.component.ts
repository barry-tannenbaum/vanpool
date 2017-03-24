import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'date-selector',
    template: `
        <label>Date: </label>
        <input type="date" [(ngModel)]="htmlDate" name="selectedDate">
        <span>{{selectedDay}}
    `
})
export class DateSelectorComponent {
    selectedDate: Date;
    selectedDay: string;
    @Output() onDateSelected = new EventEmitter<number>();

    constructor() {
        this.selectedDate = this.normalizeDate(new Date());
        this.selectedDay = this.getDay(this.selectedDate);
    }

    private normalizeDate(d: Date): Date {
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

        d = new  Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

        return d;
    }

    private getDay(d: Date): string {
        let abbrev: string = d.toUTCString().substr(0, 3);
        switch (abbrev) {
            case "Sun": return "Sunday";
            case "Mon": return "Monday";
            case "Tue": return "Tuesday";
            case "Wed": return "Wednesday";
            case "Thu": return "Thursday";
            case "Fri": return "Friday";
            case "Sat": return "Saturday";
            default: return d.toUTCString().substr(0, 3);
        }
    }

    get htmlDate(): string {
        return this.selectedDate.toISOString().substring(0, 10);
    }

    set htmlDate(s: string) {
        let parts: string[] = s.split("-");
        let d: Date = new Date(Date.UTC(parseInt(parts[0]),     // Year
                                        parseInt(parts[1])-1,   // Month
                                        parseInt(parts[2])));   // Day
        this.selectedDate.setFullYear(d.getUTCFullYear(),
                                      d.getUTCMonth(),
                                      d.getUTCDate());
        this.selectedDate = this.normalizeDate(this.selectedDate);
        this.selectedDay = this.getDay(this.selectedDate);
        this.onDateSelected.emit(this.selectedDate.getUTCDay());
    }

}   // class DateSelectorComponent
