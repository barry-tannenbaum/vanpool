import { Injectable } from '@angular/core';

import { Rider } from './rider';
import { RIDERS } from './mock-riders';

@Injectable()
export class RiderService {
    getRiders(vanId: number): Promise<Rider[]> {
        let vanRiders: Rider[] = [];
        for (let i: number = 0; i < RIDERS.length; i++) {
            if ((RIDERS[i].monAm == vanId) ||
                (RIDERS[i].monPm == vanId)) {
                vanRiders.push(RIDERS[i])
            }
        }
        return Promise.resolve(vanRiders);
    }
}   // class RiderService
