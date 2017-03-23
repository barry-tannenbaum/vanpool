import { Injectable } from '@angular/core';

import { Rider } from './rider';
import { RIDERS } from './mock-riders';

@Injectable()
export class RiderService {
    getRiders(vanId: number, day: number): Promise<Rider[]> {
        let vanRiders: Rider[] = [];
        for (let i: number = 0; i < RIDERS.length; i++) {
            switch(day) {
                case 1: // Monday
                    if ((RIDERS[i].monAm == vanId) ||
                        (RIDERS[i].monPm == vanId)) {
                        vanRiders.push(RIDERS[i])
                    }
                    break;
                case 2: // Tuesday
                    if ((RIDERS[i].tueAm == vanId) ||
                        (RIDERS[i].tuePm == vanId)) {
                        vanRiders.push(RIDERS[i])
                    }
                    break;
                case 4: // Thursday
                    if ((RIDERS[i].thuAm == vanId) ||
                        (RIDERS[i].thuPm == vanId)) {
                        vanRiders.push(RIDERS[i])
                    }
                    break;
                default:
                    console.log("Unexpected day: " + day);
                    break
            }
        }
        return Promise.resolve(vanRiders);
    }
}   // class RiderService
