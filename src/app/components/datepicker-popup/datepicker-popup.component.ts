import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerPopup {
  model;

  @Input() parentForm: FormGroup;
  @Input() formComtrolname: string;
  @Input() formLabel: string;

}
