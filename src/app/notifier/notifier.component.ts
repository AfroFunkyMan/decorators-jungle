import { Component } from '@angular/core';
import {NotifierService} from './notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent {

  showing$ = this.notifierService.showing;

  constructor(private notifierService: NotifierService) {}

}
