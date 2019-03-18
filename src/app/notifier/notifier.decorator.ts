import {Injector} from '@angular/core';
import {NotifierService} from './notifier.service';
import 'reflect-metadata';
import {tap} from 'rxjs/operators';

let injector: Injector;
export const setInjector = (i: Injector) => {
  injector = i;
};

export function constructorDecorator(...methods) {
  return (target, key, descriptor) => {
    const paramtypes = Reflect.getMetadata('design:paramtypes', target);
    methods.forEach(method => {
      const originMethod = paramtypes[0].prototype[method];
      paramtypes[descriptor].prototype[method] = (...arg) => {
        const result = originMethod.apply(target, ...arg);
        return result.pipe(tap((res: boolean) => {
          const service = injector.get(NotifierService);
          if (service) { service.setShow(res); }
        }));
      };
    });
    return descriptor;
  };
}
