import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  showing = new ReplaySubject();

  constructor() { }

  setShow(value: boolean) {
    this.showing.next(value);
  }
}
