import { Injectable } from '@angular/core';
import {interval} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  startValue = 100;

  constructor() { }

  fetch() {
    return interval(1000).pipe(startWith(this.startValue), map((res: number) => res % 2 === 0));
  }

}
