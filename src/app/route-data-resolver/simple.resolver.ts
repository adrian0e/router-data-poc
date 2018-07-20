import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';

import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {CustomData} from '../custom-data.class';


@Injectable()
export class SimpleResolver implements Resolve<Observable<CustomData>> {
  customData = of({
    presetOne: '#163f7f',
    presetTwo: '#7c3bba',
    presetThree: '#d85e31',
    skipPage: false
  });

  constructor() {
  }

  resolve() {
    return this.customData;
  }
}
