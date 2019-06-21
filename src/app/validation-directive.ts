import {AbstractDirective} from './directive';
import {Directive, ElementRef, forwardRef, OnInit} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[ngModel][validation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidationDirective),
      multi: true,
    },
  ],
})
export class ValidationDirective extends AbstractDirective implements OnInit {
  public validation = true;

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.injector.get(ElementRef);
    console.log('ngOnInit - finished');
  }

  public validate() {
    return null;
  }
}
