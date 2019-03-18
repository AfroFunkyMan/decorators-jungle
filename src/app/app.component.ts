import {Component} from '@angular/core';
import {FakeService} from './fake.service';
import {constructorDecorator} from './notifier/notifier.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decorators-jungle';

  result$ = this.fakeService.fetch();

  constructor(@constructorDecorator('fetch') private fakeService: FakeService) {

  }

}
