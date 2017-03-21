import { Injectable } from '@angular/core';

import { Van } from './van';
import { VANS } from './mock-vans';

@Injectable()
export class VanService {
    getVans(): Promise<Van[]> {
        return Promise.resolve(VANS);
    }
}   // class VanService