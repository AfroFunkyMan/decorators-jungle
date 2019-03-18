import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierComponent } from './notifier.component';
import {setInjector} from './notifier.decorator';

@NgModule({
  declarations: [NotifierComponent],
  imports: [
    CommonModule
  ],
  exports: [NotifierComponent]
})
export class NotifierModule {
  constructor(i: Injector) {
    setInjector(i);
  }
}
