import { Component } from '@angular/core';

enum Reasons {
  OTHER = 'OTHER',
  BAD_WEATHER = 'BAD_WEATHER',
  UNRELATED = 'UNRELATED',
}

interface KSReason {
  id: number;
  value: Reasons;
  description: string;
}

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  provideOtherReason: boolean = false;

  reasons: KSReason[] = [
    {
      id: 1,
      value: Reasons.UNRELATED,
      description: 'Some type of unrelated reason',
    },
    {
      id: 2,
      value: Reasons.BAD_WEATHER,
      description: 'Weather Related Reasons',
    },
    { id: 3, value: Reasons.OTHER, description: 'Other Reasons' },
  ];

  public myForm: FormGroup;

  public get reason() {
    let x = this.myForm.get('reason');
    return x;
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      reason: ['', [Validators.required]],
      otherReason: [''],
    });

    this.myForm.valueChanges.subscribe((data) => {
      console.log('(valueChange) form data', data);

      console.log('(valueChange) reason id', data.reason.id);
      console.log('(valueChange) reason value', data.reason.value);
      console.log('(valueChange) reason description', data.reason.description);

      this.provideOtherReason = data.reason.value == Reasons.OTHER;
    });
  }
}
