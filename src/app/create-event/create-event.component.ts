import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  createEventForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateEventComponent>,
              private fb: FormBuilder) {
    this.createEventForm = this.fb.group({
      name: '',
      description: '',
      date: '',
      location: ''
    });
  }

  submitEvent(): void {
    this.dialogRef.close(this.createEventForm.value);
  }
}
