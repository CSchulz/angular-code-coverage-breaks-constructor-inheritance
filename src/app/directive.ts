import {Injectable, Injector} from '@angular/core';

@Injectable()
export abstract class AbstractDirective {
  constructor(protected injector: Injector) {}
}
