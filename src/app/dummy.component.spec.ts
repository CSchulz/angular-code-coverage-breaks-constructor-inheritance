import {ChangeDetectorRef, Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ValidationDirective} from './validation-directive';

@Component({
  template: `
    <input
      [(ngModel)]="value"
      name="test"
      validation
    >
  `,
})
class InputComponent {
  public value = 'hello';
}

describe('DummyComponent', () => {
  let fixture: ComponentFixture<InputComponent>;
  let cd: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputComponent, ValidationDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should write the text', () => {
    const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2.innerText).toBe('default');
    // component.text = 'modified';
    cd.detectChanges();
    expect(h2.innerText).toBe('modified');
  });
});
